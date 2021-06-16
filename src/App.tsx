import React, { ReactElement, useContext } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import SignInComponent from './containers/sign-in'
import Layout from './hoc/Layout'
import HomePage from './containers/home'
import Exception from './containers/exception'
import Quiz from './containers/quiz'
import { CommonDataContext } from './store/providers'
import News from './containers/news'

export default function App(): ReactElement {
  const { isLoggedIn } = useContext(CommonDataContext)

  const routes = isLoggedIn ? (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/quiz" component={Quiz}></Route>
      <Route path="/news" component={News}></Route>
      <Route path="/sign-in" component={() => <Exception code={403} text="Fobidden" />}></Route>
      <Route path="*" component={() => <Exception code={404} text="Page not found" />}></Route>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/quiz" component={() => <Exception code={403} text="Fobidden" />}></Route>
      <Route path="/news" component={() => <Exception code={403} text="Fobidden" />}></Route>
      <Route path="/sign-in" component={SignInComponent}></Route>
      <Route path="*" component={() => <Exception code={404} text="Page not found" />}></Route>
    </Switch>
  )
  return <Layout>{routes}</Layout>
}
