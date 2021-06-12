import axios from 'axios'
import { useEffect, useState } from 'react'
import Article from '../../components/article'
import './home.css'

interface ArticleInterface {
  src: string
  author: string
  authorHref: string
  content: string
  href: string
}

export default function HomePage() {
  const [trendingArticles, setTrendingArticles] = useState<ArticleInterface[]>([])
  const [latestArticles, setLatestArticles] = useState<ArticleInterface[]>([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const { data: trendingData } = await axios.get('https://dev.to/api/articles', {
      params: { tag: 'react', top: 60, per_page: 4 }
    })
    const { data: latestData } = await axios.get('https://dev.to/api/articles/latest', {
      params: { tag: 'react', per_page: 4 }
    })

    const getNeccessaryData = (data: Array<any>) => {
      return data.map((article: any) => {
        return {
          src: article.cover_image ?? article.social_image,
          author: article.user.name,
          authorHref: 'https://dev.to/' + article.user.username,
          content: article.title,
          href: article.url
        }
      })
    }

    setTrendingArticles(getNeccessaryData(trendingData))
    setLatestArticles(getNeccessaryData(latestData))
  }

  return (
    <div className="homepage-container">
      <h1 className="articles-group-title">Top 4 trending React articles</h1>
      <div className="trending-articles-container">
        {trendingArticles.map((article, index) => (
          <Article key={`trending-${index}`} {...article} />
        ))}
      </div>
      <h1 className="articles-group-title">Top 4 latest React articles</h1>
      <div className="trending-articles-container">
        {latestArticles.map((article, index) => (
          <Article key={`latest-${index}`} {...article} />
        ))}
      </div>
    </div>
  )
}
