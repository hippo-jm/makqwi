import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledTimerWrap = styled.div`
    margin-top: 65px;
    display: flex;
    align-item: center;
    justify-content: center;
`;

const StyledTimer = styled.div`
    font-size: 75px;
    color: #fff;
    line-height: 1;
`;

const TimeNow = () => {
    return new Date().toLocaleTimeString('en-GB', { hour: "numeric",
        minute: "numeric", second: 'numeric'});
}
const Timer = () => {

    const [timer, setTimer] = useState(TimeNow());

    setInterval(() => {
        setTimer(TimeNow());
    }, 1000)

    return (
        <StyledTimer>{timer}</StyledTimer>
    )
}

const A = () => (
  <StyledTimerWrap>
      <Timer />
  </StyledTimerWrap>
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
