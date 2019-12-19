import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

import { Text } from '../Text'
import Footer from './Footer'

export default ({ children }: Passthrough) => {
  const history = useHistory()
  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button onClick={() => history.push('/')}>
            <Text>home</Text>
          </Button>
          <Button onClick={() => history.push('/app')}>
            <Text>login</Text>
          </Button>
        </Toolbar>
      </AppBar>
      {children}
      <Footer />
    </React.Fragment>
  )
}
