import React from 'react';
import Signup from './components/Signup'
import Link from './components/Link'
import {Router,Switch,Route} from 'react-router'

import NotFound from './components/NotFound'
import Login from './components/Login'

import {createBrowserHistory} from 'history'
const history = createBrowserHistory()

const App = () => (
  <div>
    <Router history={history}>
      <Switch >
  
          <Route strict exact path="/" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/links" component={() =>(<Link history={history}/>)}/>
          <Route path="*" component={NotFound}/>

      </Switch>
    </Router>
  
  </div>
);

export default App;
