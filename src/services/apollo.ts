import { typeDefs } from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'
import ApolloClient from 'apollo-boost'

// const authLink = setContext(async (_, { headers }) => {
//   const { jwt } = await auth.getToken()
//   return {
//     headers: {
//       ...headers,
//       authorization: jwt ? `Bearer ${jwt}` : '',
//     },
//   }
// })

export default new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_HOST,
  clientState: {
    resolvers,
    typeDefs,
  },
})
