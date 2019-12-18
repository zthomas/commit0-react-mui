declare module 'react-router-dom'
declare module 'classnames'

interface Passthrough {
  children?: React.ReactNode[] | React.ReactNode
  [x: string]: any
}

interface DefaultTheme {
  palette: any
}
