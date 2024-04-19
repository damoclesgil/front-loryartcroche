module.exports = {
  client: {
    service: {
      // name: 'strapi',
      url: 'http://localhost:1337/graphql'
    },
    includes: ['./src/graphql/*.ts'],
    excludes: ['node_modules/**/*']
  }
}
