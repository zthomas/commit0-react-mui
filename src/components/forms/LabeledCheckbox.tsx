import React, { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from './Checkbox'
import { makeStyles } from '@material-ui/styles'
import cx from 'classnames'

const useStyles = makeStyles((theme: any) => ({
  label: {
    background: theme.palette.grey4,
    padding: `6px 18px 6px 12px !important`,
    margin: 0,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: theme.palette.greenBg,
    },
    '&:hover svg path': {
      fill: theme.palette.green,
    },
  },
}))

interface LabeledCheckboxProps {
  name: string
  value?: boolean
  label?: React.ReactNode
  required?: boolean
}

export default function LabeledCheckbox({
  name,
  value,
  label,
  required,
}: LabeledCheckboxProps) {
  const [checked, setChecked] = useState(false)
  const classes = useStyles()

  return (
    <FormControlLabel
      className={cx(classes.label)}
      control={
        <Checkbox
          id={name}
          checked={checked}
          inputProps={{ required }}
          onChange={() => setChecked(!checked)}
          value={value}
        />
      }
      label={label}
    />
  )
}
