import './nav-button.css'

export default function NavButton(props: any) {
  return (
    <button
      className="nav-button"
      onClick={() => (window.location.href = props.href ? props.href : '#')}
    >
      {props.text}
    </button>
  )
}
