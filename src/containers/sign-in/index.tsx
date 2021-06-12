import { Component } from 'react'
import './sign-in.css'
import signInImg from '../../assets/sign-in-bg.png'
import BackButton from '../../components/button/back-button'
import { Input, message } from 'antd'
import { Link } from 'react-router-dom'

export default class SignIn extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onchangeEmail = this.onchangeEmail.bind(this)
    this.onchangePassword = this.onchangePassword.bind(this)
    this.logIn = this.logIn.bind(this)
    this.validate = this.validate.bind(this)
  }

  validate(email: string, password: string) {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return re.test(String(email).toLowerCase()) && password.length > 0
  }

  onchangeEmail(e: any) {
    this.setState({ email: e.target.value })
  }

  onchangePassword(e: any) {
    this.setState({ password: e.target.value })
  }

  logIn() {
    const { email, password } = this.state
    if (!email || !password) return message.warning('Please enter email and password')
    if (!this.validate(email, password)) return message.error('Email or password is not correct')
    const userInfo = { email: this.state.email }
    localStorage.setItem('user', JSON.stringify(userInfo))
    window.location.href = '/'
  }

  render() {
    const { email, password } = this.state
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
                onChange={this.onchangeEmail}
              />
              <Input
                className="sign-in-input"
                placeholder="Your password"
                type="password"
                value={password}
                onChange={this.onchangePassword}
              />
            </div>
            <button className="sign-in-btn" type="submit" onClick={this.logIn}>
              Login
            </button>
          </div>
          <span>
            <Link className="sign-in-homepage-link" to="/">
              DBlog
            </Link>
            A minimal, emotionless and boring blog
          </span>
        </div>
      </div>
    )
  }
}
