import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";


const httpLink = new HttpLink({
  uri: "http://127.0.0.1:8000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});