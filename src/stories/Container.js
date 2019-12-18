import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import theme from '../services/theme'

export default ({children}) => <MuiThemeProvider theme={createMuiTheme(theme)}>{children}</MuiThemeProvider>
