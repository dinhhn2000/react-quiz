import Article from '../../components/article'
import './home.css'

export default function HomePage() {
  const articles = [
    {
      src: 'https://shoji-dark.fueko.net/content/images/2020/06/photo-1533122250115-6bb28e9a48c3.jpeg',
      author: 'Charles Barrett',
      content: 'Everything has beauty, but not everyone sees it'
    },
    {
      src: 'https://shoji-dark.fueko.net/content/images/2020/06/photo-1551540827-6c8ae1aaedbb.jpeg',
      author: 'Hannah Weastell',
      content: 'Being unique is better than being perfect'
    },
    {
      src: 'https://shoji-dark.fueko.net/content/images/2020/06/photo-1511407337274-9c172957270e.jpeg',
      author: 'Victoria West',
      content: 'I always loved aesthetics'
    },
    {
      src: 'https://shoji-dark.fueko.net/content/images/2020/06/photo-1526170286768-b3c80b34b036.jpeg',
      author: `Megan Anderson`,
      content: `You've gotta be natural`
    }
  ]

  const getArticles = () => {}

  return (
    <div className="homepage-container">
      <h1 className="articles-group-title">Top trending</h1>
      <div className="trending-articles-container">
        {articles.map((article) => (
          <Article key={article.src} {...article} />
        ))}
      </div>
      <h1 className="articles-group-title">Latest</h1>
      <div className="trending-articles-container">
        {articles.map((article) => (
          <Article key={article.src} {...article} />
        ))}
      </div>
    </div>
  )
}
