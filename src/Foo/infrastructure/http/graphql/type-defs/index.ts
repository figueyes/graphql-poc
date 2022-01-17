import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    load: [Foo]
    hello: String
  }

  extend type Mutation {
    add(data: FooInput!): Foo
  }
  input FooInput {
    name: String!
    title: String!
    order: Int!
    baz: BazInput!
  }
  type Foo {
    name: String!
    title: String!
    order: Int!
    baz: Baz!
  }

  input BazInput {
    name: String!
    street: String
  }

  type Baz {
    name: String!
    street: String
  }
`
