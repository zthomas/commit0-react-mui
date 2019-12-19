import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Centered from '../components/layout/Centered'
import { useHistory } from 'react-router-dom'
import { H3, Text } from '../components/Text'

export default function NotFound() {
  const history = useHistory()
  return (
    <Centered container>
      <Typography variant="h1">404</Typography>
      <H3>not_found</H3>
      <Button variant="outlined" onClick={() => history.push('/')}>
        <Text>home</Text>
      </Button>
    </Centered>
  )
}
