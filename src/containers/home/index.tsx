import { useContext } from 'react'
import { CommonDataContext } from '../../store/providers'
import './home.css'

export default function HomePage() {
  const { isLoggedIn } = useContext(CommonDataContext)

  return (
    <div className="guest-homepage-container">
      <h1>
        Welcome <b>{isLoggedIn ? 'Admin' : ''}</b> to <b>React Quiz</b> site, hope you will have fun
        time
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j942wKiXFu8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}
