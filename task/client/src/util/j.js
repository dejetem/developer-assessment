export const FETCH_DRUG_QUERY = gql`
{
    query($drugId: ID!) {
        drug(drugId: $drugId) {
            id
            name
            description
            sku
            price
            image
        }
    }
}
`
const CREATE_DRUG_MUTATION = gql`
{
    mutation createMutation($drugId: String!,$name: String!, $description: String!, $sku: String!,$price: Number!, $image: String!) {
        createDrug(drugData:{drugId:$drugId, name:$name, description:$description, sku:$sku, price:$price, image:$image}) {
            drug {
                id
                name
                description
                sku
                price
                image
            }
        }
    }
}
`

const UPDATE_DRUG_MUTATION = gql`
{
    mutation createMutation($drugId: String!,$name: String!, $description: String!, $sku: String!,$price: Number!, $image: String!) {
        updateDrug(drugData:{drugId:$drugId, name:$name, description:$description, sku:$sku, price:$price, image:$image}) {
            drug {
                id
                name
                description
                sku
                price
                image
            }
        }
    }
}
`

const DELETE_DRUG_MUTATION = gql`
{
    mutation createMutation($drugId: String!) {
        deleteDrug(drugId:$drugId) {
            drug {
                id
            }
        }
    }
}
`