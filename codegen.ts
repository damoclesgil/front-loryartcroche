import type { CodegenConfig } from '@graphql-codegen/cli'

let graphqlURL = 'http://127.0.0.1:1337/graphql'

const config: CodegenConfig = {
  overwrite: true,
  schema: graphqlURL,
  documents: [
    'src/graphql/queries/**/*.ts',
    'src/graphql/fragments/**/*.ts',
    'src/graphql/mutations/**/*.ts'
  ],
  generates: {
    'src/graphql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withComponent: false,
        namingConvention: 'change-case-all#pascalCase',
        reactApolloVersion: 3,
        withHooks: '@/hooks',
        skipTypename: true,
        nonOptionalTypename: false
      }
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
