import React, { ReactElement, useContext } from 'react'
import './layout.css'
import Toolbar from '../../components/toolbar'
import Auxiliary from '../Auxiliary'
import { CommonDataContext } from '../../store/providers'

export type Props = {
  children: React.ReactNode
}
export default function Layout(props: Props): ReactElement {
  const { needToolbar } = useContext(CommonDataContext)

  return (
    <Auxiliary>
      {needToolbar[0] && <Toolbar />}
      <main className="content" style={{ paddingTop: !needToolbar[0] ? 0 : 80, minHeight: '100vh' }}>
        {props.children}
      </main>
    </Auxiliary>
  )
}
