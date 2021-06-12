import React, { ReactElement } from 'react'
import './nav-question.scss'

interface Props {
  text: string
  onClick: Function
}

export default function NavQuestion(props: Props): ReactElement {
  return (
    <button className="nav-question-container" onClick={() => props.onClick()}>
      {props.text}
    </button>
  )
}
