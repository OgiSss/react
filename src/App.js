import './App.scss';
import Layout from './hoc/Layout/Layout';
import React, { Suspense, useEffect } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './containers/Auth/Logout/Logout';
import * as fromActions from './store/actions/index';
import Profile from './containers/Profile/Profile';
import SignUp from './containers/Auth/SignUp/SignUp';

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const Dashboard = React.lazy(() => {
  return import('./containers/Dashboard/Dashboard');
});

const App = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes;
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        { <Route path="/" exact render={props => <Dashboard {...props} />} />}
        { <Route path="/profile" exact render={() => <Profile />} />}
        { <Route path="/logout" exact render={() => <Logout />} />}
        {<Redirect to="/" />}
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        { <Route path="/auth" exact render={props => <Auth {...props} />} />}
        { <Route path="/signup" exact render={props => <SignUp {...props} />} />}
        { <Redirect to="/auth" />}
      </Switch>
    );
  }

  return (
    <Layout isAuthenticated={props.isAuthenticated} >
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>

  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(fromActions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);