import './nav-button.css'
import { NavLink } from 'react-router-dom'

interface Prop {
  text: string
  href: string
  show: boolean
}

export default function NavButton(props: Prop) {
  return (
    <div>
      {props.show && (
        <NavLink className="nav-button" to={props.href ? props.href : '#'}>
          {props.text}
        </NavLink>
      )}
    </div>
  )
}
