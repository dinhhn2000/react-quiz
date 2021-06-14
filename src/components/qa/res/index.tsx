import React, { ReactElement } from 'react'
import './res.scss'

interface Question {
  id: number
  question: string
  choices: { [key: string]: string }
}

interface Props {
  status: boolean
  questions: Question[]
  answers: Question[]
}

export default function Result(props: Props): ReactElement {
  const checkAnswer = (question: Question, answers: Question[]) => {
    return answers.some((a) => a.id === question.id)
  }

  return (
    <div className="result-screen">
      <div className="result-screen-left">
        <div className={props.status ? 'result-container pass' : 'result-container fail'}>
          <span>{props.status ? 'Pass' : 'Fail'}</span>
        </div>
        <button className="answer-container" onClick={() => window.location.reload()}>
          Retry???
        </button>
      </div>
      <div className="result-screen-left">
        <div className="result-container">
          {props.answers?.length > 0 ? (
            <p style={{ textAlign: 'justify' }}>
              You have chosen wrong <b style={{ color: 'crimson' }}>{props.answers.length}</b>{' '}
              answers. If you feel that you cannot pass this test, why don't you play some game to
              gain some spirit. I suggest you play{' '}
              <a href="https://osu.ppy.sh/home" target="_blank" rel="noreferrer">
                this
              </a>
            </p>
          ) : (
            <p>
              Congratulation, you have passed the test. But do not be arrogant, the outside world is
              enormous to explore. I wish you have a great journey in the future{' '}
            </p>
          )}
        </div>
        <div className="failed-answers">
          {props.answers?.length > 0
            ? props.questions.map((q, index) => {
                if (checkAnswer(q, props.answers))
                  return (
                    <div key={index} className="result-container failed-answers-container failed">
                      {index + 1}
                    </div>
                  )
                return (
                  <div key={index} className="result-container failed-answers-container passed">
                    {index + 1}
                  </div>
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}
