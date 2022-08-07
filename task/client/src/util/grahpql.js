import { gql } from "@apollo/client";

export const FETCH_ALL_QUERY = gql`
{
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
}
`


