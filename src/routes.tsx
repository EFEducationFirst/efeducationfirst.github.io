/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { FourOhFour } from './pages/fourOhFour';
import { Home } from './pages/home';
import { Handbook } from './pages/handbook';

const NamedRoute: React.FC<CustomRouteProps> = ({ component: Component, title, ...props }) => {
  const defaultPageTitle = 'EF Open Source';
  document.title = title ? `${defaultPageTitle} - ${title}` : defaultPageTitle;

  return (
    <Route
      {...props}
      render={(routeProps) => (<Component {...routeProps} />)}
    />
  );
};

export const Routes: React.FC = () => {
  const routes = [
    <NamedRoute
      key="Home"
      exact
      path="/"
      component={Home}
    />,
    <NamedRoute
      key="Handbook"
      exact
      path="/handbook"
      title="Handbook"
      component={Handbook}
    />,
    <NamedRoute
      key="404"
      path="*"
      title="404"
      component={FourOhFour}
    />,
  ];

  return (
    <Switch>
      {routes}
    </Switch>
  );
};

interface CustomRouteProps extends RouteProps {
  title?: string;
  component: React.ComponentType<any>;
}
