import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { CommonDataContext } from '../../store/providers'
import Article from '../../components/article'
import Footer from '../../components/footer'
import './news.css'
import axios from 'axios'

interface ArticleInterface {
  src: string
  author: string
  authorHref: string
  content: string
  href: string
}

export default function News(): ReactElement {
  const [trendingArticles, setTrendingArticles] = useState<ArticleInterface[]>([])
  const [latestArticles, setLatestArticles] = useState<ArticleInterface[]>([])

  const { isLoggedIn, setLoading, loading } = useContext(CommonDataContext)

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true)
      const { data: trendingData } = await axios.get('https://dev.to/api/articles', {
        params: { tag: 'react', top: 60, per_page: 4 }
      })
      const { data: latestData } = await axios.get('https://dev.to/api/articles/latest', {
        params: { tag: 'react', per_page: 4 }
      })
      setLoading(false)

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

    if (isLoggedIn) getArticles()
  }, [setLoading, isLoggedIn])

  return (
    !loading &&
    isLoggedIn && (
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
        <Footer />
      </div>
    )
  )
}
