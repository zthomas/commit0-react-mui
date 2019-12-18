import React from 'react'
import { Button, Fab, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface ActionButtonProps {
  variant?: 'contained' | 'outlined' | 'extended'
  color?: 'primary' | 'secondary'
  icon?: React.ComponentType
  disabled?: boolean
  loading?: boolean
  children?: React.ReactNode
  [x: string]: any
}

const useStyles = makeStyles((theme: any) => ({
  icon: {
    marginRight: 4,
  },
}))

export default function ActionButton({
  variant = 'contained',
  color = 'primary',
  icon,
  disabled,
  loading,
  children,
  ...passthrough
}: ActionButtonProps) {
  const classes = useStyles()
  const ButtonComponent: any = variant === 'extended' ? Fab : Button
  const iconProps: any = { className: classes.icon }
  const iconElement = icon ? React.createElement(icon, iconProps) : null

  return (
    <ButtonComponent
      variant={variant}
      color={color}
      disabled={disabled || loading}
      {...passthrough}
    >
      {loading ? <CircularProgress size={19} /> : iconElement}
      {children}
    </ButtonComponent>
  )
}
