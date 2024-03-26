import { gql } from '@apollo/client'

export const getProfile = gql`
  query getProfile {
    me {
      id
      username
      email
    }
  }
`
