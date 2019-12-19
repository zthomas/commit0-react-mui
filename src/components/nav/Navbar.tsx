import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import UserIcon from '@material-ui/icons/PersonOutline'

import { Text } from '../Text'
// import { queries } from '../../graphql'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: any) => ({
  dropdown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    minWidth: 250,
  },
  userName: {
    margin: `0 ${theme.spacing(1)}px`,
  },
}))

interface NavBarProps {
  user?: string
  children: React.ReactNode
  [x: string]: any
}

export default function NavBar({ user = '', children, ...props }: NavBarProps) {
  const classes = useStyles()
  const history = useHistory()
  const [dropdownAnchor, setDropdownAnchor] = React.useState()
  const [drawer, setDrawer] = React.useState()

  const renderUserName = () => {
    return [<UserIcon key={1} />, user && user.replace(/@.*/gi, '')]
  }

  const toggleDropdown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDropdownAnchor(dropdownAnchor != null ? null : e.currentTarget)
  }

  const hideDropdown = () => {
    setDropdownAnchor(null)
  }

  const logout = () => {
    // this.props.client.mutate({ mutation: queries.LOGOUT })
  }

  const closeDrawer = () => setDrawer(false)

  const renderDrawer = () => {
    return (
      <Drawer anchor="right" open={drawer} onClose={closeDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <div className={classes.menu}>
            <MenuItem>{renderUserName()}</MenuItem>
            <Divider />
            {renderMenuItems()}
          </div>
        </div>
      </Drawer>
    )
  }

  const renderMenuItems = () => {
    return (
      <React.Fragment>
        <MenuItem onClick={() => history.push('/app')}>
          <Text>dashboard</Text>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Text>logout</Text>
        </MenuItem>
      </React.Fragment>
    )
  }

  return (
    <AppBar position="static" {...props}>
      <IconButton onClick={() => history.push('/')}>
        <HomeIcon />
      </IconButton>

      <div className={classes.dropdown}>
        {children}
        <Hidden xsDown>
          <Button onClick={toggleDropdown} className={classes.userName}>
            {renderUserName()}
          </Button>
          <Menu
            anchorEl={dropdownAnchor}
            open={Boolean(dropdownAnchor)}
            onClose={hideDropdown}
          >
            {renderMenuItems()}
          </Menu>
        </Hidden>
        <Hidden smUp>
          <IconButton onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          {renderDrawer()}
        </Hidden>
      </div>
    </AppBar>
  )
}
