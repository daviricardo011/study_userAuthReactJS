import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/home'
import Login from './screens/login'
import StoreProvider from './contexts/provider'
import PrivateRoutes from './utils/routes/private/privateRoute'

export default function RootPages() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoutes path="/" component={Home} />
        </Switch>
      </StoreProvider>
    </Router>
  )
}

