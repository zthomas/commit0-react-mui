import React from 'react'
import Grid from '@material-ui/core/Grid'

interface CenteredProps {
  container?: boolean
  horizontal?: boolean
  children?: React.ReactNode
  [x: string]: any
}

export default function Centered(props: CenteredProps) {
  const { children, container, horizontal, ...passThrough } = props
  const style = 'container' in props ? { flex: '1 0 auto' } : {}
  const justify: any = 'horizontal' in props ? null : 'center'
  return (
    <Grid
      container
      className="animated fadeIn"
      justify={justify}
      alignItems="center"
      direction="column"
      style={style}
      {...passThrough}
    >
      {children}
    </Grid>
  )
}
