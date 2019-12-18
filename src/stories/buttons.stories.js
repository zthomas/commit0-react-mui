import React from 'react'
import Container from './Container'
import Button from '../components/button/Button.tsx'
import LinkedInButton from '../components/button/LinkedIn.tsx'
import { Box } from '@material-ui/core'
import NavigationIcon from '@material-ui/icons/Navigation'
import BackIcon from '@material-ui/icons/ArrowBackIos'

export default { title: 'Buttons' }

export const Regular = () => (
  <Container>
    <Box m={3}>
      <Button>Primary</Button>
    </Box>
    <Box m={3}>
      <Button disabled>Disabled</Button>
    </Box>
    <Box m={3}>
      <Button variant="outlined">Primary Outlined</Button>
    </Box>
    <Box m={3}>
      <Button loading></Button>
    </Box>
  </Container>
)

export const Rounded = () => (
  <Container>
    <Box m={3}>
      <Button variant="extended">Primary</Button>
    </Box>
    <Box m={3}>
      <Button variant="extended" disabled>
        Disabled
      </Button>
    </Box>
    <Box m={3}>
      <Button variant="extended" icon={NavigationIcon}>
        Primary Outlined
      </Button>
    </Box>
  </Container>
)

export const Navigation = () => (
  <Container>
    <Box m={3}>
      <Button color="default" icon={BackIcon}>
        Back
      </Button>
    </Box>
  </Container>
)

export const LinkedIn = () => (
  <Container>
    <Box m={3}>
      <LinkedInButton>Connect with LinkedIn</LinkedInButton>
    </Box>
  </Container>
)
