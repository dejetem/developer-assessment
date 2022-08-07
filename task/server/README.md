
## Create a virtual environment to install dependencies in and activate it:

```bash
$ cd server
$ python -m venv env
$ env\Scripts\activate
```

## Then install the dependencies:

```bash
(env)$ pip install -r requirements.txt
```

Note the (env) in front of the prompt. This indicates that this terminal session operates in a virtual environment set up by venv

## run the server:

```bash
(env)$ cd store_api
(env)$ python manage.py runserver
```
Open your a tab on your browser and input this url 
## http://127.0.0.1:8000/graphql
it will open the GraphIQL interface for interactive testing of the GraphQL API.

##  GraphQL API  Mutations

```bash
#get all drug in store
query {
  allDrugs {
    id
    name
    description
    sku
    price
    image
  }
}

#delete a drug by id
mutation createMutation {
  deleteDrug(id:5) {
    drug {
      id
    }
  }
}

#update drug details
mutation createMutation {
  updateDrug(drugData: {id: 5,name: "Coartem", description: "Coartem contains a combination of artemether and lumefantrine. Artemether and lumefantrine are anti-malaria medicines that interfere with the growth of parasites in the red blood cells of the human body.",
  sku: "8ZE809", price: 500, image: "https://www.drugs.com/images/pills/nlm/00078-0568-45_NLMIMAGE10_6C443641.jpg"}) {
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

#add a new drug to store
mutation createMutation {
  createDrug(drugData: {name: "Coartem", description: "Coartem contains a combination of artemether and lumefantrine. Artemether and lumefantrine are anti-malaria medicines that interfere with the growth of parasites in the red blood cells of the human body.",
  sku: "8GE809", price: 1000, image: "https://www.drugs.com/images/pills/nlm/00078-0568-45_NLMIMAGE10_6C443641.jpg"}) {
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

# get a drug by id
query {
  drug(drugId: 2) {
    id
    name
    description
    sku
    price
    image
  }
}


```
