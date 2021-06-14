import React, { useState } from 'react'

export const CommonDataContext = React.createContext<any>(null)

export type Props = {
  children: React.ReactNode
}

const CommonDataProvider = (props: Props) => {
  const { children } = props

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') ? true : false)
  const [needToolbar, setNeedToolbar] = useState(true)
  const [loading, setLoading] = useState(false)

  const data = {
    isLoggedIn,
    setIsLoggedIn,
    needToolbar,
    setNeedToolbar,
    loading,
    setLoading
  }

  return <CommonDataContext.Provider value={data}>{children}</CommonDataContext.Provider>
}

export default CommonDataProvider
