import React, { ReactElement, useState } from 'react'
import { Modal } from 'antd'

interface Props {
  message: string
  visible: boolean
}

export default function WelcomeModal(props: Props): ReactElement {
  const [visible, setVisible] = useState(props.visible)

  const close = () => {
    setVisible(false)
    localStorage.setItem('first-time', 'false')
  }

  return (
    <Modal
      title="Welcome"
      visible={visible}
      onOk={close}
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      {props.message}
    </Modal>
  )
}
