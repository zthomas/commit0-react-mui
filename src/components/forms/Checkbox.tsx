import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/styles'
import CheckedIcon from '@material-ui/icons/CheckBox'
import cx from 'classnames'

const useStyles = makeStyles((theme: any) => ({
  icon: {
    fontSize: '1.5rem',
    '&:hover': {
      color: theme.palette.green,
    },
  },
  checked: {
    color: theme.palette.green,
    backgroundColor: theme.palette.greenBg,
  },
}))

const CheckboxIcon = ({}: Passthrough) => (
  <svg baseProfile="full" width="24" height="24">
    <path
      fill="#dddee0"
      d="M19,5 v14 H5 V5 h14 m0,-2 H5 c-1.1,0 -2,.9 -2,2 v14 c0,1.1 .9,2 2,2 h14 c1.1,0 2,-.9 2,-2 V5 c0,-1.1 -.9,-2 -2,-2  z "
    ></path>
    <rect
      stroke="#ffffff"
      x="5px"
      height="14px"
      y="5px"
      id="rect1"
      stroke-width="0px"
      width="14px"
      fill="#ffffff"
    ></rect>
  </svg>
)

export default function CheckboxField(props: Passthrough) {
  const classes = useStyles()

  return (
    <Checkbox
      icon={<CheckboxIcon className={classes.icon} />}
      checkedIcon={
        <CheckedIcon className={cx(classes.icon, classes.checked)} />
      }
      color="default"
      {...props}
    />
  )
}
