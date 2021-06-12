import { Button, Modal } from 'antd'
import { useState } from 'react'

function withModal(WrappedComponent: any, modalTitle: string, okText: string, cancelText: string) {
  return function () {
    const [isVisible, setIsVisible] = useState(false)

    const showModal = () => {
      setIsVisible(true)
    }

    const handleOk = () => {
      setIsVisible(false)
    }

    const handleCancel = () => {
      setIsVisible(false)
    }

    return (
      <>
        <Button style={{ margin: '10px' }} type="primary" onClick={showModal}>
          Open {modalTitle}
        </Button>
        <Modal
          title={modalTitle}
          visible={isVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={okText}
          cancelText={cancelText}
        >
          <WrappedComponent />
        </Modal>
      </>
    )
  }
}

export default withModal
