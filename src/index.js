import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { IntlProvider } from 'react-intl';
import Routes from './routes/route.index'
import GlobalStyle from './atomic/globalstyled';
import { Body, ContentWrap, ContentHeader } from './atomic/body';
import { Header } from './atomic/header'
import * as serviceWorker from './serviceWorker';
import './index.css';

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
  <>
    <IntlProvider locale="ko" messages={koreanString}>
        <Body>
            <ContentWrap>
                <ContentHeader>
                    <Header />
                </ContentHeader>
                <Routes />
            </ContentWrap>
        </Body>
    </IntlProvider>
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
