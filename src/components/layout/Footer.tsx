import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { H5, H6, P, Small } from '../Text'
import theme from '../../services/theme'
import logo from '../../assets/icons/logo.svg'

const useStyles = makeStyles({
  pageFooter: {
    flex: 0,
    background: 'black',
    padding: theme.spacing(3),
    color: 'white',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
  },
  logo: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  img: {
    verticalAlign: 'middle',
    height: theme.spacing(4),
  },
  text: {
    display: 'inline-block',
    marginLeft: theme.spacing(2),
    verticalAlign: 'middle',
  },
})

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.pageFooter}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.logo}>
            <img alt="logo" src={logo} className={classes.img} />
            <div className={classes.text}>
              <H5 color="inherit">phrase.home_title</H5>
            </div>
          </div>
          <Small color="inherit">phrase.copyright</Small>
        </Grid>
        <Grid item xs={3}>
          <H6 color="inherit">menu</H6>
          <P color="inherit">item</P>
          <P color="inherit">item</P>
        </Grid>
        <Grid item xs={3}>
          <H6 color="inherit">about</H6>
          <Link to="terms-of-service" className={classes.a}>
            <P color="inherit">tos</P>
          </Link>
        </Grid>
        <Link to="login" />
      </Grid>
    </footer>
  )
}
