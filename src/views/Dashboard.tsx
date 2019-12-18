import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useLocation } from 'react-router-dom'

import Centered from '../components/layout/Centered'
import { Text } from '../components/Text'
import AppNavbar from '../components/layout/AppNavbar'

function Dashboard() {
  const location = useLocation()

  return (
    <React.Fragment>
      <AppNavbar pathname={location.pathname} />
      <Centered container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Text>phrase.home_welcome</Text>:
          </Grid>
        </Grid>
      </Centered>
    </React.Fragment>
  )
}

export default Dashboard
