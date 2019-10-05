import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './global-styles';
import PageWrapper from './views/PageWrapper/PageWrapper';

ReactDOM.render(
  <>
    <GlobalStyles />
    <PageWrapper />
  </>,
  document.getElementById('root')
);
