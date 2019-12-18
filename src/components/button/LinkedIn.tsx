import React from 'react'
import Button from './Button'
import { makeStyles } from '@material-ui/styles'
import cx from 'classnames'
import linkedInIcon from '../../assets/icons/linkedin.svg'

interface ButtonProps {
  className?: string
  children?: React.ReactNode
}

const useStyles = makeStyles((theme: any) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  button: {
    backgroundColor: '#0077B7',
    '&:hover': {
      backgroundColor: '#005D8F',
    },
  },
}))

export default function LinkedinButton({
  children,
  className,
  ...passThrough
}: ButtonProps) {
  const classes = useStyles()

  return (
    <Button className={cx(className, classes.button)} {...passThrough}>
      <img src={linkedInIcon} className={classes.icon} alt="linkedin" />
      {children}
    </Button>
  )
}
