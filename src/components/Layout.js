import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/normalize';
import { Normalize } from 'styled-normalize';
import theme from '../theme/theme';
// import Transition from '../components/Transition';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Layout = ( {children} ) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>Scott Simpson</title>
      </Helmet>
      <Normalize / >
      <GlobalStyle />
      <Nav />
      <main role="main">{children}</main>
      <Footer />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout;
