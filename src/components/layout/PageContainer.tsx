import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import { Text } from '../Text'
import Footer from './Footer'

export default ({ children }: Passthrough) => (
  <React.Fragment>
    <AppBar position="static" color="default">
      <Toolbar>
        <Link to="/">
          <Button>
            <Text>home</Text>
          </Button>
        </Link>
        <Link to="/app">
          <Button>
            <Text>login</Text>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
    {children}
    <Footer />
  </React.Fragment>
)
