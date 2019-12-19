declare module 'react-router-dom'
declare module 'react-helmet'
declare module 'classnames'

interface Passthrough {
  children?: React.ReactNode[] | React.ReactNode
  [x: string]: any
}
