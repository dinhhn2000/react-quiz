import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import './rainbow-btn.css'

interface Props {
  href: string
  text: string
}

export default function RainbowBtn(props: Props): ReactElement {
  let history = useHistory()

  return (
    <button className="rainbow rainbow-1" onClick={() => history.push(props.href)}>
      {props.text}
    </button>
  )
}
