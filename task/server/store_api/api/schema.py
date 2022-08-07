import graphene

from graphene_django import DjangoObjectType, DjangoListField 
from django_filters import FilterSet, OrderingFilter
from .models import Drug

#Our API GraphQL queries and mutations
class Store(DjangoObjectType): 
    class Meta:
        model = Drug
        fields = "__all__"
        



class Query(graphene.ObjectType):
    all_drugs = graphene.List(Store)
    drug = graphene.Field(Store, drug_id=graphene.Int())

    def resolve_all_drugs(self, info, **kwargs):
        return Drug.objects.all().order_by('-id')

    def resolve_drug(self, info, drug_id):
        return Drug.objects.get(pk=drug_id)

# allow the client to add or change the data through the API
class StoreInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    description = graphene.String()
    sku = graphene.String()
    price = graphene.Int()
    image = graphene.String() 

#mutation to add new drug
class CreateDrug(graphene.Mutation):
    class Arguments:
        drug_data = StoreInput(required=True)

    drug = graphene.Field(Store)

    @staticmethod
    def mutate(root, info, drug_data=None):
        drug_instance = Drug( 
            name=drug_data.name,
            description=drug_data.description,
            sku=drug_data.sku,
            price=drug_data.price,
            image=drug_data.image
        )
        drug_instance.save()
        return CreateDrug(drug=drug_instance)

#mutation to update a drug detail
class UpdateDrug(graphene.Mutation):
    class Arguments:
        drug_data = StoreInput(required=True)

    drug = graphene.Field(Store)

    @staticmethod
    def mutate(root, info, drug_data=None):

        drug_instance = Drug.objects.get(pk=drug_data.id)

        if drug_instance:
            drug_instance.name = drug_data.name
            drug_instance.description = drug_data.description
            drug_instance.sku = drug_data.sku
            drug_instance.price = drug_data.price
            drug_instance.image = drug_data.image
            drug_instance.save()

            return UpdateDrug(drug=drug_instance)
        return UpdateDrug(drug=None)

#mutation to detete a drug detail
class DeleteDrug(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    drug = graphene.Field(Store)

    @staticmethod
    def mutate(root, info, id):
        drug_instance = Drug.objects.get(pk=id)
        drug_instance.delete()

        return None

#register our api with Graphene,
class Mutation(graphene.ObjectType):
    create_drug = CreateDrug.Field()
    update_drug = UpdateDrug.Field()
    delete_drug = DeleteDrug.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)