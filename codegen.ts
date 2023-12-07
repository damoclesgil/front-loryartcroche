import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:1337/graphql',
  documents: 'src/graphql/**/*.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: []
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
