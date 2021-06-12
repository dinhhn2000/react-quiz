import React, { ReactElement } from 'react'
import './answer.scss'

interface Props {
  answer: string
  chosen: boolean
  onClick: Function
}

export default function Answer(props: Props): ReactElement {
  return (
    <button
      className={props.chosen ? 'answer-container chosen' : 'answer-container'}
      onClick={() => props.onClick()}
    >
      {props.answer}
    </button>
  )
}
