import React, { ReactElement } from 'react'
import progressIcon from '../../assets/progress-icon.png'
import './index.css'

interface Props {
  current: number
  total: number
}

export default function ProgressBar(props: Props): ReactElement {
  return (
    <div className="progress-container">
      <div className="progress" style={{ width: (props.current / props.total) * 100 + '%' }}>
        <img className="progressbar-icon" src={progressIcon} alt="" />
      </div>
    </div>
  )
}
