import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Users from './components/users/Users';
import ErrorPage from './components/ErrorPage';
import { AppContextWrapper } from './components/AppContext';
import Summary from './components/Summary';


const App = (): ReactElement => {

  return (
    <AppContextWrapper>
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/users" component={Users}></Route>
              <Route path="/summary" component={Summary}></Route>
              <Route path="*" componen={ErrorPage}></Route>

            </Switch>
          </Router>
        </header>
      </div>
    </AppContextWrapper>
  )
}

export default App;
