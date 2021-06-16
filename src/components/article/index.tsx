import './article.css'

interface Prop {
  href?: string
  src?: string
  text?: string
  authorHref?: string
  author?: string
  content?: string
}

export default function Article(props: Prop) {
  return (
    <div className="article-container">
      <a href={props.href} target="_blank" rel="noreferrer">
        <img className="article-image" src={props.src} alt={props.text} />
        <a href={props.authorHref} target="_blank" rel="noreferrer" className="article-author">
          {props.author}
        </a>
        <p className="article-content">{props.content}</p>
      </a>
    </div>
  )
}
