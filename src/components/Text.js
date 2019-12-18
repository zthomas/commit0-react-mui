import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'

export const Text = props => {
  const { t } = useTranslation()

  return <React.Fragment>{t(props.path || props.children)}</React.Fragment>
}

export const H1 = build('h1')
export const H2 = build('h2')
export const H3 = build('h3')
export const H4 = build('h4')
export const H5 = build('h5')
export const H6 = build('h6')
export const P = build('p', 'body1')
export const Span = build('span', 'body1')
export const Small = build('small', 'body2')

function build(component, variant) {
  return props => {
    const { t } = useTranslation()

    return (
      <Typography
        {...props}
        component={component}
        variant={variant || component}
      >
        {t(props.children)}
      </Typography>
    )
  }
}
