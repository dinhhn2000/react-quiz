import './signout-btn.css'

export default function LogOutButton() {

  const signOut = () => {
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  return (
    <button className="signout-btn" onClick={signOut}>
      Logout{'   '}
      <i className="fas fa-sign-out-alt"></i>
    </button>
  )
}
