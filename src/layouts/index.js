import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'rebass';
import theme from '../theme/theme';
import normalize from '../theme/normalize';

import Nav from '../components/Nav';

const TemplateWrapper = ({ children }) => {
  normalize();
  return(
    <Provider theme={theme}>
      <div>
        <Helmet>
          <title>Scott Simpson</title>
          <link rel="stylesheet" href="https://use.typekit.net/iza8kcn.css" />
        </Helmet>
        <Nav />
        <div>{children()}</div>
      </div>
    </Provider>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
