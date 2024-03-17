import { gql } from '@apollo/client'
// import { graphql } from './gql/gql';
// import { graphql } from '../generated'

export const MUTATION_REGISTER = gql`
  mutation REGISTER($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`
