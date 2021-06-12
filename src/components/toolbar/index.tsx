import './toolbar.css'
import Logo from '../logo'
import LogOutButton from '../button/sign-out-btn'
import NavButton from '../button/nav-button'
import RainbowBtn from '../button/rainbow-button'

const Toolbar = (props: any) => {
  const navBtns = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Quiz',
      href: '/quiz'
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
          <NavButton key={nav.text} text={nav.text} href={nav.href} />
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
