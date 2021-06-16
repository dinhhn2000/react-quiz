import './toolbar.css'
import Logo from '../logo'
import LogOutButton from '../button/sign-out-btn'
import NavButton from '../button/nav-button'
import RainbowBtn from '../button/rainbow-button'
import { useContext } from 'react'
import { CommonDataContext } from '../../store/providers'

const Toolbar = () => {
  const { isLoggedIn } = useContext(CommonDataContext)

  const navBtns = [
    {
      text: 'Home',
      href: '/',
      loggedIn: false
    },
    {
      text: 'News',
      href: '/news',
      loggedIn: true
    },
    {
      text: 'Quiz',
      href: '/quiz',
      loggedIn: true
    }
  ]

  return (
    <header className="Toolbar">
      <div className="d-flex align-items-center" style={{ maxHeight: '100px' }}>
        <div className="Logo" onClick={() => (window.location.href = '/')}>
          <Logo />
        </div>
      </div>
      <div className="toolbar-nav-btn">
        {navBtns.map((nav) => (
          <NavButton
            key={nav.text}
            text={nav.text}
            href={nav.href}
            show={!nav.loggedIn || (nav.loggedIn && isLoggedIn)}
          />
        ))}
        {localStorage.getItem('user') ? (
          <LogOutButton />
        ) : (
          <RainbowBtn text="Sign in" href="/sign-in" />
        )}
      </div>
    </header>
  )
}

export default Toolbar
