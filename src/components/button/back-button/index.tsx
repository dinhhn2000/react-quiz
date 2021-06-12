import { Button } from 'antd'
import './back-button.css'

export default function BackButton(props: any) {
  return (
    <Button
      className="back-button"
      type="text"
      onClick={() => (props.href ? (window.location.href = props.href) : window.history.back())}
    >
      <i className="fas fa-long-arrow-alt-left back-btn-icon"></i>
      {props.text}
    </Button>
  )
}
