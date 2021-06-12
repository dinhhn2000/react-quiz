import React, { ReactElement } from 'react'
import './exception.scss'

interface Props {
  code: Number
  text: string
}

export default function Exception(props: Props): ReactElement {
  return (
    <div id="app">
      <div>{props.code}</div>
      <div className="txt">
        {props.text}
        <span className="blink">_</span>
      </div>
    </div>
  )
}
