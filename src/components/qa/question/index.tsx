import React, { ReactElement } from 'react'
import './question.scss'

interface Props {
  question: string
}

export default function Question(props: Props): ReactElement {
  return <div className="question-container">{props.question}</div>
}
