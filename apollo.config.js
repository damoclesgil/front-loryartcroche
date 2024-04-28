module.exports = {
  client: {
    service: {
      name: 'strapi-schema@current',
      url: 'http://localhost:1339/graphql'
    },
    tagName: 'gql',
    addTypename: false,
    excludes: [
      './src/graphql/types.ts',
      '**/__tests__/**/*',
      '**/node_modules'
    ],
    includes: [
      './src/graphql/queries/**/*.ts',
      './src/graphql/fragments/**/*.ts',
      './src/graphql/mutations/**/*.ts'
    ]
  }
}
