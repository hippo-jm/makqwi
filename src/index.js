import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { IntlProvider } from 'react-intl';
import Routes from './routes/route.index'
import GlobalStyle from './atomic/globalstyled';
import { StyledBody } from './atomic/body';
import * as serviceWorker from './serviceWorker';

import koreanString from './locale/ko';

// global.Intl = require('intl');

// moment js locale 설정.
moment.locale('kr', {
  weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
});
// addLocaleData([...en, ...ko]);
/*
<IntlProvider locale="ko" messages={koreanString}>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </IntlProvider>
    <OdocToastContainer />
    <GlobalStyle />
 */

const App = () => (
  <React.Fragment>
    <IntlProvider locale="ko" messages={koreanString}>
      <div>여기는 글로벌 헤드이다 우하하</div>
        <StyledBody>
            <Routes />
        </StyledBody>

    </IntlProvider>
    <GlobalStyle />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
