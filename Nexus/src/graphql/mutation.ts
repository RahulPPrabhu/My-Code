import { gql } from '@apollo/client'

export const ADD_USER = gql`
    mutation addUser($name: String!, $address: String!) {
    addUser(name: $name, address: $address) {
        id,
        name,
        address,
        valid
    }
}
`

export const DELETE_USER = gql`
    mutation deleteUser($userId: Int!) {
    deleteUser(userId: $userId) {
        id,
        name,
        address,
        valid
    }
}
`