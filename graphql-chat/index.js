const { graphql, buildSchema } = require('graphql');

const db = {
  users: [
    { id: 1, email: 'alex@gmail.com', name: 'Alex' },
    { id: 2, email: 'tobi@gmail.com', name: 'Tobi' }
  ]
};

const schema = buildSchema(`
  type Query {
    users: [User!]!
  }

  type User {
    id: ID!
    email: String!
    name: String
    avatarUrl: String
  }
`); // ! means is required

const rootValue = {
  // resolver function
  users: () => db.users
};

graphql(
  schema,
  `
    {
      users {
        id
        email
      }
    }
  `,
  rootValue
)
  .then(res => console.dir(res, { depth: null }))
  .catch(console.error);
