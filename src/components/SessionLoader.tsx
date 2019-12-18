import React from 'react'

import LoadingIndicator from './LoadingIndicator'
// import auth from '../services/auth'

interface SessionLoaderProps {
  children?: React.ReactNode
}

export default function SessionLoader({ children }: SessionLoaderProps) {
  const [loading, setLoading] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState(null)

  const authenticate = async () => {
    setLoading(true)
    try {
      // const profile = await auth.loadSession()
    } catch (err) {
      setErrorMsg(err.message)
      console.error(err)
    }
    setLoading(false)
  }

  React.useEffect(() => {
    authenticate()
  }, [])

  if (loading !== false) {
    return <LoadingIndicator />
  } else if (errorMsg != null) {
    return errorMsg
  } else {
    return children || null
  }
}
