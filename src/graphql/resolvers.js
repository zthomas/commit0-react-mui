import { queries } from '../graphql'
import { logger } from '../services'

export default {
  Mutation: {
    login: (_, { access_token, userGroup, userId, orgId }, { cache }) => {
      try {
        const { session } = cache.readQuery({ query: queries.GET_SESSION })
        cache.writeData({
          data: {
            session: {
              ...session,
              access_token,
              userGroup,
              userId,
              orgId,
            },
          },
        })
      } catch (e) {
        logger.error(e.statusText, e)
      }
      return null
    },
    logout: async () => {
      // await auth.logout()
      // router.push('/')
      return null
    },
  },
}
