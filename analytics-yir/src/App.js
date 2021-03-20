import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Example from './containers/example-base-page';
import Introduction from './containers/Introduction'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Example} />
          <Route exact path='/Introduction' component={Introduction} />
        </Switch>
      </Router>
  );
}

export default App;
