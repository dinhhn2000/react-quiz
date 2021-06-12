import React, { ReactElement } from 'react'
import './rainbow-btn.css'

interface Props {
  href: string
  text: string
}

export default function RainbowBtn(props: Props): ReactElement {
  return (
    <a className="rainbow rainbow-1" href={props.href}>
      {props.text}
    </a>
  )
}
