import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client'
import { createConsumer } from '@rails/actioncable'
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink'

const getCsrfToken = () => {
  const token = document
    .querySelector('meta[name=csrf-token]')
    .getAttribute('content')

  return token
}

const hasSubscriptionOperation = ({ query: { definitions } }) => {
  return definitions.some(
    ({ kind, operation }) => kind === 'OperationDefinition' && operation === 'subscription'
  )
}

const getApolloClient = () => {
  const cable = createConsumer()

  const httpLink = createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': getCsrfToken()
    }
  })

  const actionCableLink = new ActionCableLink({ cable })

  const link = ApolloLink.split(
    hasSubscriptionOperation,
    actionCableLink,
    httpLink
  )

  const apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
    link
  })

  return apolloClient
}

export default getApolloClient
