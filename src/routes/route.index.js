import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const A = () => (
  <div>hia</div>
);

const B = () => (
  <div>hib</div>
);

const C = () => (
  <div>hic</div>
);

export default () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={A} />
        <Route path="/b" exact component={B} />
        <Route path="/c" exact component={C} />

        {/* 404 PAGE */}
        <Route render={() => <Redirect to="/" />} />
      </Switch>
  </BrowserRouter>
);
