import { Button } from 'antd'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CommonDataContext } from '../../../store/providers'
import './back-button.css'

interface Prop {
  text: string
  href?: string
}

export default function BackButton(props: Prop) {
  let history = useHistory()
  const { setNeedToolbar } = useContext(CommonDataContext)

  return (
    <Button
      className="back-button"
      type="text"
      onClick={() => {
        setNeedToolbar(true)
        props.href ? history.push(props.href) : history.goBack()
      }}
    >
      <i className="fas fa-long-arrow-alt-left back-btn-icon"></i>
      {props.text}
    </Button>
  )
}
