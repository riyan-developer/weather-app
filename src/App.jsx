import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/Home'
import Dashboard from './layout/Dashboard'
import WeatherContext from './context/WeatherContext.jsx'

const App = () => {
  return (
    <WeatherContext>
    <Router basename='/'>
      <Switch>
        <Route path='/'>
            <Dashboard>
              <Home/>
            </Dashboard>
          </Route>
      </Switch>
    </Router>
    </WeatherContext>
  )
}

export default App