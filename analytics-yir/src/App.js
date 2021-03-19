import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Example from './containers/example-base-page';
import JournalismNav from './containers/journalism_nav';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={JournalismNav} />
        </Switch>
      </Router>
  );
}

export default App;
