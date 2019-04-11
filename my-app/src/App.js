import React, {Component, Fragment} from 'react';
import Users from './Users/users';
import ChallengePage from './Challenge/ChallengePage';
import Layout from './Layout/Admin';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import notFound from './notFound';

export default class extends Component{

  state = {
    currentUser: []
  };


   routing = (
    <Router>
      <Layout>
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <Link to="/challenges">Challenges</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="/users">Users</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/challenges" component={ChallengePage} />
          <Route component={notFound} >
          </Route>
        </Switch>
      </Layout>
    </Router>
  );

  render(){
    const { currentUser } = this.state;

    return this.routing;
  };
}


