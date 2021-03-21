import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import mainBI from './containers/mainBI';
import mainJournalism from './containers/mainJournalism';
import mainYIR from './containers/mainYIR';
import Introduction from './containers/Introduction';
import Audience from './containers/Audience';
import Website from './containers/Website';
import SocialMedia from './containers/SocialMedia';
import SectionInsights from './containers/SectionInsights';
import FinalRemarks from './containers/FinalRemarks';
import BIJournalism from './containers/B&I-Journalism';
import BAndINav from './containers/bAndI_nav'
import JournalismNav from './containers/journalism_nav'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
         
          <Route exact path='/' component={mainYIR} />
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
