import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Custom Components
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import { HOME, CONTACT, ABOUT } from './routes';

const MainRouter = () => {
  //Regex
  //   /Home
  //   /
  //   /contact
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME} component={Home} exact />
        <Route path={CONTACT} component={Contact} exact />
        <Route path={ABOUT} component={About} exact />
        <Route />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
