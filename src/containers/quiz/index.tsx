import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import Answer from '../../components/qa/answer'
import QuestionComponent from '../../components/qa/question'
import NavQuestion from '../../components/qa/nav'
import Result from '../../components/qa/res'
import ProgressBar from '../../components/progress-bar'
import './quiz.css'

interface Props {}

interface Question {
  id: number
  question: string
  choices: { [key: string]: string }
  chosen?: string
}

export default function Quiz({}: Props): ReactElement {
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    id: 0,
    question: '',
    choices: {},
    chosen: ''
  })
  const [questions, setQuestions] = useState<Question[]>([])
  const [nextBtnText, setNextBtnText] = useState<string>('Next')
  const [showBtnBack, setShowBtnBack] = useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [resultStatus, setResultStatus] = useState<boolean>(false)
  const [failAnswers, setFailAnswers] = useState<Question[]>([])

  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    const { data } = await axios.get('https://react14-contest-easy-quiz-app.herokuapp.com/quiz')
    const ques = data.result.map((q: Question) => {
      return { ...q, chosen: '' }
    })
    setQuestions(ques)
    setCurrentQuestion(ques[0])
  }

  const chooseAnswer = (index: number) => {
    setCurrentQuestion({ ...currentQuestion, chosen: Object.keys(currentQuestion.choices)[index] })
  }

  const getCurrentQuestionIndex = () => {
    const { id } = currentQuestion
    let index: number = 0
    for (let i = 0; i < questions.length; i++)
      if (questions[i].id === id) {
        index = i
        return index
      }
    return index
  }

  const changeQuestion = (navigation: string) => {
    switch (navigation) {
      case 'next': {
        setShowBtnBack(true)
        const currentId = getCurrentQuestionIndex()
        questions[currentId] = JSON.parse(JSON.stringify(currentQuestion))
        if (currentQuestion.id === questions[questions.length - 1].id) return submit()
        if (currentQuestion.id === questions[questions.length - 2].id) setNextBtnText('Submit')
        setCurrentQuestion(questions[currentId + 1])
        break
      }
      case 'prev': {
        if (currentQuestion.id === questions[0].id) return
        if (currentQuestion.id === questions[1].id) setShowBtnBack(false)
        setNextBtnText('Next')
        const currentId = getCurrentQuestionIndex()
        questions[currentId] = JSON.parse(JSON.stringify(currentQuestion))
        setCurrentQuestion(questions[currentId - 1])
      }
    }
  }

  const submit = async () => {
    console.log(
      questions.map((q) => {
        return { id: q.id, choice: q.chosen }
      })
    )

    const { data } = await axios.post(
      'https://react14-contest-easy-quiz-app.herokuapp.com/quiz/answer',
      {
        listAnswer: questions.map((q) => {
          return { id: q.id, choice: q.chosen }
        })
      }
    )

    console.log(data)

    const { status, incorrectAnswers } = data
    setShowResult(true)
    setResultStatus(status === 'F' ? false : true)
    setFailAnswers(incorrectAnswers)
  }

  return (
    <div className="quiz-bg">
      {!showResult && (
        <ProgressBar current={getCurrentQuestionIndex() + 1} total={questions.length} />
      )}
      <div className="qa-section">
        {!showResult && (
          <div className="question-section">
            {currentQuestion && <QuestionComponent question={currentQuestion.question} />}
            <div className="nav-question-section">
              {showBtnBack && <NavQuestion text="Back" onClick={() => changeQuestion('prev')} />}
              <NavQuestion text={nextBtnText} onClick={() => changeQuestion('next')} />
            </div>
          </div>
        )}
        {currentQuestion && !showResult && (
          <div className="answer-section">
            {Object.keys(currentQuestion.choices).map((choice: string, index) => (
              <Answer
                key={index}
                answer={currentQuestion.choices[choice]}
                chosen={choice === currentQuestion.chosen}
                onClick={() => chooseAnswer(index)}
              />
            ))}
          </div>
        )}
        {showResult && <Result status={resultStatus} answers={failAnswers} />}
      </div>
    </div>
  )
}
