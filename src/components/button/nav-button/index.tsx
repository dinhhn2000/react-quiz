import './nav-button.css'
import { NavLink } from 'react-router-dom'

export default function NavButton(props: any) {
  return (
    <div>
      <NavLink
        className="nav-button"
        to={props.href ? props.href : '#'}
        // onClick={() => (window.location.href = props.href ? props.href : '#')}
      >
        {props.text}
      </NavLink>
    </div>
  )
}
