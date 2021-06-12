import './sign-in-btn.css'

export default function SignInButton(props: any) {
  return (
    <button
      className="sign-in-btn"
      style={props.style}
      onClick={() => (window.location.href = props.href ? props.href : '/sign-in')}
    >
      {props.text}
    </button>
  )
}
