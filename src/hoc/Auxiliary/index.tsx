import React from 'react'

export interface AuxProps {
  children: React.ReactNode
}

const Auxiliary = (props: AuxProps) => <>{props.children}</>
export default Auxiliary
