import type { CodegenConfig } from '@graphql-codegen/cli'

let graphqlURL = 'http://127.0.0.1:1337/graphql'

const config: CodegenConfig = {
  overwrite: true,
  // 'http://127.0.0.1:1337/graphql'
  schema: graphqlURL,
  documents: 'src/graphql/queries/**/*.ts',
  // documents: 'src/graphql/*.graphql',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      // preset: 'near-operation-file-preset',
      plugins: []
      // plugins: ['typescript-operations', 'typed-document-node']
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
  // namingConvention: 'keep'
}

export default config
