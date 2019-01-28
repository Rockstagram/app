import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'controllers';

import {
  Dashboard,
  Home,
  NotFound,
  InstaFollow,
  GetPro,
  Account,
  Auth
} from 'components';
import { ProFeature } from 'controllers';

export const LINKS = {
  home: '/',
  dashboard: '/dashboard',
  account: '/account',
  instaFollow: '/insta-follow',
  instaClean: '/insta-clean',
  instaComment: '/insta-comment',
  instaMessage: '/insta-message',
  getPro: '/get/pro',
  tasks: '/tasks',
  other: '/other',
  auth: '/auth'
};

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path={LINKS.home}>
        <Home />
      </PrivateRoute>
      <PrivateRoute exact path={LINKS.dashboard}>
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path={LINKS.account}>
        <Account />
      </PrivateRoute>
      <PrivateRoute exact path={`${LINKS.instaFollow}/*`}>
        <InstaFollow />
      </PrivateRoute>
      <PrivateRoute exact path={`${LINKS.instaClean}/*`}>
        <ProFeature />
      </PrivateRoute>
      <PrivateRoute exact path={`${LINKS.instaComment}/*`}>
        <ProFeature />
      </PrivateRoute>
      <PrivateRoute exact path={`${LINKS.instaMessage}/*`}>
        <ProFeature />
      </PrivateRoute>
      <PrivateRoute exact path={`${LINKS.getPro}`}>
        <GetPro />
      </PrivateRoute>
      <PrivateRoute exact path={`${LINKS.tasks}/*`}>
        <GetPro />
      </PrivateRoute>
      <Route exact path={`${LINKS.auth}`}>
        <Auth />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
