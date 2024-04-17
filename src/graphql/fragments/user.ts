import { gql } from '@apollo/client'

export const UserFragment = gql`
  fragment userFragment on UsersPermissionsUser {
    username
    email
    provider
    confirmed
    blocked
  }
`

/* 
  user {
    data {
      id
      attributes {
        ...userFragment
      }
    }
  }
*/
