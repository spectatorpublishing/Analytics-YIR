import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Example from './containers/example-base-page';
import JournalismNav from './containers/journalism_nav';
import BAndINav from './containers/bAndI_nav';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={BAndINav} />
          <Route exact path='/bAndINav' component={BAndINav} />
          <Route exact path='/journalismNav' component={JournalismNav} />
        </Switch>
      </Router>
  );
}

export default App;
