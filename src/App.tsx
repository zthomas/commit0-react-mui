import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import { apollo, history } from './services'

import Dashboard from './views/Dashboard'

import SessionLoader from './components/SessionLoader'
import LoadingIndicator from './components/LoadingIndicator'

export default function App() {
  if (navigator.userAgent === 'ReactSnap') {
    return <LoadingIndicator />
  }

  return (
    <ApolloProvider client={apollo}>
      <Switch history={history}>
        <Route path="/app" component={SessionLoader}>
          <Route path="" exact component={Dashboard} />
        </Route>
      </Switch>
    </ApolloProvider>
  )
}
