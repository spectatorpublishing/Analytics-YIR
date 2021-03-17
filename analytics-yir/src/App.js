import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import mainBI from './containers/mainBI';
import mainJournalism from './containers/mainJournalism';
import mainYIR from './containers/mainYIR';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/YIR' component={mainBI} />
          <Route exact path='/BI' component={mainJournalism} />
          <Route exact path='/journalism' component={mainYIR} />
          <Route exact path='/BINav' component={} />
          <Route exact path='/YIRNav' component={} />
          <Route exact path='/journalismNav' component={} />
        </Switch>
      </Router>
  );
}

export default App;
