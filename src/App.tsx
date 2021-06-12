import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import SignInComponent from './containers/sign-in'
import Layout from './hoc/Layout'
import HomePage from './containers/home'
import Homework from './containers/homework'

class App extends React.Component {
  checkLogedIn() {
    return localStorage.getItem('user')
  }

  render() {
    const routes = this.checkLogedIn() ? (
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="*" component={HomePage}></Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/sign-in" component={SignInComponent}></Route>
        <Route exact path="/sign-up" component={SignInComponent}></Route>
        <Route exact path="/quiz" component={Homework}></Route>
        <Route path="*" component={HomePage}></Route>
      </Switch>
    )
    return <Layout>{routes}</Layout>
  }
}

export default App
