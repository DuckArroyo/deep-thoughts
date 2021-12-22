# deep-thoughts

## Bootcamp Module 21

Installed node_modules on mac

- `npm install`

Install Apollo - graphQL interpreter

- `npm i apollo-server-express graphql`

.env file?

Starting the server

- `npm start`

Seeding the database

- `npm run seed`

## 21.1.4 Install Apollo Server

With REST APIs, we implement CRUD actions through the HTTP verbs `GET`, `POST`, `PUT`, and `DELETE`. With GraphQL, however, we split these four actions into the following two categories:

`Queries`: Queries are how we perform `GET` requests and ask for data from a GraphQL API.

`Mutations`: Mutations are how we perform `POST`, `PUT`, and `DELETE` requests to create or manipulate data through a GraphQL API.

When we access our GraphQL API from a client, we make either a query request or mutation request. So how are they created in the first place?

The setup of a GraphQL API involves defining two very important things which work in unison:

- `Type definitions`: Type definitions, or TypeDefs for short, involves literally defining every piece of data that the client can expect to work with through a query or mutation. Every GraphQL API starts with defining this data, as this type of strict type definition will give the client more clarity as to what they are asking for and what they can expect in return. Think of this as not only defining the API endpoint, but also defining the exact data and parameters that are tied to that endpoint.

- `Resolvers`: Resolvers are simply the functions we connect to each query or mutation type definition that perform the CRUD actions that each query or mutation is expected to perform.

The two of these together form what's known as a `schema`. Let's get an example of each setup now so we can see exactly how this works.

## Create schemas

1. Create a folder within server folder and files

- `schemas`
  - `typeDefs.js`
  - `resolvers.js`
  - `index.js`

2. Code the queries into typeDefs
3. Code the responses into resolvers
4. export through the index.

## Add Apollo to server

definition is instered into server file.
run server to test

- `npm run watch`

Open playground to see graphQL working (url will vary as defined in server)
http://localhost:3001/graphql

## Create Type and Resolver for first query

A resolver can accept four arguments in the following order:

1. `parent`: This is if we used nested resolvers to handle more complicated actions, as it would hold the reference to the resolver that executed the nested resolver function. We won't need this throughout the project, but we need to include it as the first argument.

2. `args`: This is an object of all of the values passed into a query or mutation request as parameters. In our case, we destructure the `username` parameter out to be used.

3. `context`: This will come into play later. If we were to need the same data to be accessible by all resolvers, such as a logged-in user's status or API access token, this data will come through this `context` parameter as an object.

4. `info`: This will contain extra information about an operation's current state. This isn't used as frequently, but it can be implemented for more advanced uses.

## Create Mutations

CRUD Operations to the database
Adding a user.
User login in.

## Creating sessions with `JSON Web Token` or `JWT`

JSON Web Tokens are especially useful because they do the following things:

- Contain all the data you need encoded into a single string.

- Eliminate the need to save a session ID on the back end or in the database.

- Decrease the amount of server-side resources needed to maintain authentication.

- Can be generated anywhere and aren't tied to a single domain like cookies.

In the CLI and while in the server directory, run

- `npm install jsonwebtoken`

- create the `auth.js` file
- code it

The `signToken()` function expects a user object and will add that user's `username`, `email`, and `_id` properties to the token. Optionally, tokens can be given an expiration date and a secret to sign the token with. Note that the secret has nothing to do with encoding. The secret merely enables the server to verify whether it recognizes this token.

## 21.2.5 Implement Auth Middleware to Populate Me Query

If the client saves the JWT somewhere (like in localStorage), then the token can be included with certain requests for the back end to validate. For example, the front end might call a GraphQL query called me and expect the logged-in user's full details as the response.
You can include the token with a request in the following ways:

- As part of the body
- In the query string (e.g., ?token=abc)
- As an HTTP header

For development the me can be placed in the headers section of GraphQL Playground as a JSON

## 21.2.6 Add Mutations for Thoughts, Friends, and Reactions

To add thoughts to the app

- update the mutation in typeDefs
- update the mutation object in resolvers
- test the mutation in graphQL
  - post a new thought
  - since the mutation carries the user context, the only items to include in the post is `thoughtText`
