import { Link } from 'react-router-dom'
import './article.css'

export default function Article(props: any) {
  return (
    <div className="article-container">
      <Link to={props.href}>
        <img className="article-image" src={props.src} alt={props.text} />
        <Link to={props.author} className="article-author">
          {props.author}
        </Link>
        <p className="article-content">{props.content}</p>
      </Link>
    </div>
  )
}
