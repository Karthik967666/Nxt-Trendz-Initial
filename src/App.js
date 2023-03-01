import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm/index'

import Home from './components/Home/index'

import NotFound from './components/NotFound/index'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
