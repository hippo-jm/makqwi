import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <AppRoute path="/" exact component={Home} event />

        {/* ab testing */}
        <AppRoute exact path="/a" component={Home} event />
        <AppRoute exact path="/b" component={Home} event />
        <AppRoute exact path="/c" component={Home} event />
        <AppRoute exact path="/d" component={Home} event />

        <AppRoute path="/manual" component={Manual} />

        {/* hospital */}
        <AppRoute component={HsDetail} exact path="/hospitals/:id" />
        <AppRoute path="/hospitals" exact component={HsList} />
        <AppRoute component={Doctor} exact path="/doctors/:id" />
        <OdocRoute component={HsDemo} exact path="/hospitals/demo/:compId" />
        <AppRoute component={HsReview} exact path="/hospitals/:id/reviews" />
        <AppRoute component={HsReview} exact path="/hospitals/:id/reviews/:doctorId" />

        {/* counsel */}
        <AppRoute
          requireAuth
          path="/userreq/:id/hid/:hid"
          exact
          component={ReqsHsDetail}
        />
        <AppRoute
          requireAuth
          path="/userreq/:id"
          exact
          component={ReqsHsList}
          hideMobileFooter
        />
        <AppRoute
          requireAuth
          path="/hosresps/:id/hid/:hid"
          exact
          component={RespsHsDetail}
        />
        <AppRoute
          path="/counsel/:directHosId"
          exact
          component={Counsel}
          hideMobileFooter
        />
        <AppRoute path="/counsel" exact component={Counsel} hideMobileFooter />
        <AppRoute
          requireAuth
          path="/reqdone/:id"
          exact
          component={ReqDone}
          hideMobileFooter
        />
        <AppRoute requireAuth path="/myrequest/:id" exact component={MyRequest} />
        <AppRoute
          requireAuth
          path="/settings"
          exact
          component={Settings}
          hideMobileFooter
        />

        {/* mypage */}
        <AppRoute requireAuth path="/favorites" component={Favorites} />
        <AppRoute requireAuth path="/mypage" component={MyPage} />

        {/* auth */}
        <AppRoute
          path="/updatepassword/:resetToken/:email"
          component={UpdatePassword}
        />
        <AppRoute
          requireAuth
          path="/changepassword"
          component={ChangePassword}
          hideTopMenu
          hideMobileFooter
        />
        <AppRoute path="/login" component={Login} hideTopMenu hideMobileFooter />
        <AppRoute path="/signup" component={Signup} hideTopMenu hideMobileFooter />
        <AppRoute
          path="/findemail"
          component={FindEmail}
          hideMobileFooter
          hideTopMenu
        />
        <AppRoute
          path="/findpass"
          component={FindPass}
          hideMobileFooter
          hideTopMenu
        />

        {/* ERROR PAGE */}
        <AppRoute path="/errors" component={Errors} hideMobileFooter />

        {/* 404 PAGE */}
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);
