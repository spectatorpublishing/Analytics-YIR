import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Example from './containers/example-base-page';
import Introduction from './containers/Introduction';
import Audience from './containers/Audience';
import Website from './containers/Website';
import SocialMedia from './containers/SocialMedia';
import SectionInsights from './containers/SectionInsights';
import FinalRemarks from './containers/FinalRemarks';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Example} />
          <Route exact path='/Introduction' component={Introduction} />
          <Route exact path='/Audience' component={Audience} />
          <Route exact path='/Website' component={Website} />
          <Route exact path='/SocialMedia' component={SocialMedia} />
          <Route exact path='/SectionInsights' component={SectionInsights} />
          <Route exact path='/FinalRemarks' component={FinalRemarks} />

        </Switch>
      </Router>
  );
}

export default App;
