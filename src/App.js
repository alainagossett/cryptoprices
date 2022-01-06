import React from 'react'

import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';

import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route path="/price/:symbol" render={(props) => <Price {...props}/>} />
        {/* 
        Render props from React Router DOM:
        1. history - gives access to browser history and allow mutation of browser history
        2. location - gives us access to current location in browser and query params
        3. match - gives us access to URL params
        */}
     </Switch>
    </div>
  );
}

export default App;
