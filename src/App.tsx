import React, { ReactElement } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import SignInComponent from './containers/sign-in'
import Layout from './hoc/Layout'
import HomePage from './containers/home'
import Exception from './containers/exception'

export default function App(): ReactElement {
  const checkLogedIn = () => {
    return localStorage.getItem('user')
  }

  const routes = checkLogedIn() ? (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/quiz" component={HomePage}></Route>
      <Route path="*" component={() => <Exception code={404} text="Page not found" />}></Route>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/sign-in" component={SignInComponent}></Route>
      <Route path="*" component={() => <Exception code={403} text="Fobidden" />}></Route>
    </Switch>
  )
  return <Layout>{routes}</Layout>
}
