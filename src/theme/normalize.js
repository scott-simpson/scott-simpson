import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #37393C;
    font-family:  "neue-haas-unica", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 300;
    line-height: 1.7;
  }
  ::selection {
    background-color: #37393C;
    color: #FFFFFF;
  }
  ::-moz-selection {
    background: #37393C;
    color: #FFFFFF;
  }
  img {
    display: block;
    max-width: 100%;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3em, 0);
      transform: translate3d(0, 3em, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3em, 0);
      transform: translate3d(0, 3em, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @-webkit-keyframes fadeInUpAbsolute {
    from {
      opacity: 0;
      margin-top: 3em;
    }

    to {
      opacity: 1;
      margin-top: 0em;
    }
  }
  @keyframes fadeInUpAbsolute {
    from {
      opacity: 0;
      margin-top: 3em;
    }

    to {
      opacity: 1;
      margin-top: 0em;
    }
  }
  .fadeInUp {
    animation: fadeInUp 0.75s cubic-bezier(.39,.575,.28,.995);
  }
  .fadeInUpAbsolute {
    animation: fadeInUpAbsolute 0.75s cubic-bezier(.39,.575,.28,.995);
  }
`
export default GlobalStyle;
