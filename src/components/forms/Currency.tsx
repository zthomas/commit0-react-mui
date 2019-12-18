import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

interface CurrencyProps {
  name: string
  label: React.ReactNode
  errorText: React.ReactNode
  helperText: React.ReactNode
  [x: string]: any
}

export default function Currency({
  name,
  label,
  errorText,
  helpText,
  ...fieldProps
}: CurrencyProps) {
  return (
    <TextField
      id={name}
      name={name}
      label={label || name}
      helperText={errorText || helpText}
      InputProps={{
        inputProps: {
          type: 'number',
          min: 0,
        },
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      {...fieldProps}
    />
  )
}
