import React, { useState, useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Router, Switch, Route } from 'react-router-dom'
import queryString from 'qs'

import AuthCallback from './views/AuthCallback'
import Logout from './views/Logout'
import Error404 from './views/Error404'
import LandingPage from './views/Landing'

import appTheme from './services/theme'
import LoadingIndicator from './components/LoadingIndicator'
import history from './services/history'

const App = React.lazy(() => import('./App'))
const Terms = React.lazy(() => import('./views/Terms'))

export default function ConnectedRoutes() {
  const [state, setState] = useState({
    pathname: window.location.pathname,
    query: parseQuery(window.location.search),
  })

  useEffect(() => {
    return history.listen(location => {
      const { pathname } = location
      setState({
        pathname,
        query: parseQuery(location.search),
      })
    })
  }, [])

  return <Routes location={state.pathname} />
}

export function Routes({ location = '/' }) {
  return (
    <MuiThemeProvider theme={createMuiTheme(appTheme)}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/auth/callback" component={AuthCallback} />
          <Route path="/logout" component={Logout} />
          <Route path="/app(.*)" component={load(App, location)} />
          <Route path="/terms-of-service" component={load(Terms, location)} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
}

function parseQuery(query = '') {
  return queryString.parse(query, { ignoreQueryPrefix: true })
}

function load(Component: React.LazyExoticComponent<any>, location: string) {
  return (props: object) => (
    <React.Suspense fallback={<LoadingIndicator />}>
      <Component location={location} {...props} />
    </React.Suspense>
  )
}
