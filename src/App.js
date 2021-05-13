import React from 'react'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../src/style/index.scss'
import About from './components/About'
import Contact from './components/Contact'
import CV from './components/CV';
import Navigation from './components/Navigation'
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';


const App = () => {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={About}/>
        <Route path='/about' component={About} />
        <Route path='/contact'  component={Contact}/>
        <Route path='/cv'  component={CV}/>
        <Route path='/portfolio'  component={Portfolio}/>
        <Route path='/skills'  component={Skills}/>

        
        
      </Switch>
      
    </Router>
  )
}

export default App
