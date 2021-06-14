import React, { ReactElement, useContext } from 'react'
import './layout.css'
import Toolbar from '../../components/toolbar'
import Auxiliary from '../Auxiliary'
import { CommonDataContext } from '../../store/providers'

export type Props = {
  children: React.ReactNode
}
export default function Layout(props: Props): ReactElement {
  const { needToolbar, loading } = useContext(CommonDataContext)

  return (
    <Auxiliary>
      {needToolbar && <Toolbar />}
      <main className="content" style={{ paddingTop: !needToolbar ? 0 : 80, minHeight: '100vh' }}>
        {loading && (
          <div className="loading-screen">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        )}
        {props.children}
      </main>
    </Auxiliary>
  )
}
