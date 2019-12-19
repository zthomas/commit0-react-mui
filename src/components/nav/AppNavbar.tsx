import React from 'react'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Tab from '@material-ui/core/Tab/Tab'
import { makeStyles } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'

import { Text } from '../Text'
import Navbar from './Navbar'

const useStyles = makeStyles((theme: any) => ({
  navbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}))

interface AppNavbarProps {
  pathname: string
}

export default function AppNavbar({ pathname = '' }: AppNavbarProps) {
  const classes = useStyles()
  const history = useHistory()
  const tab = (pathname.split('/')[2] || '').toLowerCase()
  const _handleTab = (e: React.ChangeEvent<{}>, tab: string) =>
    history.push(`/app/${tab}`)

  return (
    <Navbar className={classes.navbar}>
      <Tabs
        variant="fullWidth"
        indicatorColor="primary"
        value={tab}
        onChange={_handleTab}
      >
        <Tab value="home" label={<Text>home</Text>} />
      </Tabs>
    </Navbar>
  )
}
