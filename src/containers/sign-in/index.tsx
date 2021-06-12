import { ReactElement, useContext, useEffect, useState } from 'react'
import './sign-in.css'
import signInImg from '../../assets/sign-in-bg.png'
import BackButton from '../../components/button/back-button'
import { Input, message } from 'antd'
import { CommonDataContext } from '../../store/providers'

export type Props = {
  children: React.ReactNode
}

export default function SignIn(props: Props): ReactElement {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { needToolbar } = useContext(CommonDataContext)
  const setNeedToolbar = needToolbar[1]

  useEffect(() => {
    setNeedToolbar(false)
  })

  const validate = (email: string, password: string) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return (
      re.test(String(email).toLowerCase()) &&
      password.length > 0 &&
      email === 'admin@gmail.com' &&
      password === 'admin'
    )
  }

  const onchangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const onchangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  const logIn = () => {
    if (!email || !password) return message.warning('Please enter email and password')
    if (!validate(email, password)) return message.error('Email or password is not correct')
    const userInfo = { email, password }
    localStorage.setItem('user', JSON.stringify(userInfo))
    window.location.href = '/'
  }

  return (
    <div className="sign-in">
      <img className="sign-in-bg" src={signInImg} alt="Sign In Background" />
      <div className="sign-in-page">
        <BackButton text="BACK TO HOMEPAGE" href="/"></BackButton>
        <div className="sign-in-form">
          <h1 className="sign-in-title">Welcome back!</h1>
          <div className="sign-in-inputs">
            <Input
              className="sign-in-input"
              placeholder="Your email address"
              type="email"
              value={email}
              onChange={onchangeEmail}
            />
            <Input
              className="sign-in-input"
              placeholder="Your password"
              type="password"
              value={password}
              onChange={onchangePassword}
            />
          </div>
          <button className="sign-in-btn" type="submit" onClick={logIn}>
            Login
          </button>
        </div>
        <span>
          <a
            className="sign-in-homepage-link"
            href="https://osu.ppy.sh/home"
            target="_blank"
            rel="noreferrer"
          >
            DQuiz
          </a>
          A minimal, emotionless and boring quiz site <br></br> If u donot have an account, u can
          use admin@gmail.com - admin to login
        </span>
      </div>
    </div>
  )
}
