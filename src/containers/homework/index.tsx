import LoginForm from './login-form'
import withModal from './hoc'

export default function Homework() {
  const LoginFromWithModal = withModal(LoginForm, 'Login form', 'LOGIN', 'BACK')
  return <LoginFromWithModal />
}
