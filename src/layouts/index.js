import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'rebass';
import theme from '../theme/theme';
import normalize from '../theme/normalize';

const TemplateWrapper = ({ children }) => {
  normalize();
  return(
    <Provider theme={theme}>
      <div>
        <Helmet>
          <title>Scott Simpson</title>
          <link rel="stylesheet" href="https://use.typekit.net/iza8kcn.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Helmet>
        <div>{children()}</div>
      </div>
    </Provider>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
