import { gql } from '@apollo/client'

export const GETALLUSER = gql`
    query userDetails {
    userDetails {
        id,
        name,
        address,
        valid
    }
}
`

export const GET_VALID_USER = gql`
    query validUser{
    drafts {
        id,
        name,
        address,
        valid
    }
}
`