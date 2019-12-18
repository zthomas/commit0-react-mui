import gql from 'graphql-tag'

export default {
  GET_SESSION: gql`
    query {
      session @client {
        access_token
        userGroup
        orgId
        userId
      }
    }
  `,

  LOGIN: gql`
    mutation Login(
      $accessToken: String!
      $userId: String
      $orgId: String
      $userGroup: String
    ) {
      login(
        access_token: $accessToken
        userId: $userId
        orgId: $orgId
        userGroup: $userGroup
      ) @client
    }
  `,

  LOGOUT: gql`
    mutation Logout {
      logout @client
    }
  `,
}
