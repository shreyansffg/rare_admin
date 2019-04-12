import React, {Component} from 'react';
import Users from './Users/users';
import ChallengePage from './Challenge/ChallengePage';
import Layout from './Layout/Admin';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import notFound from './notFound';

export default class extends Component{

  state = {
    currentUser: []
  };


   routing = (
    <Router>
      <Layout>
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


