import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import UntitledSans from '../fonts/UntitledSansTest-Light.woff'
import UntitledSansMedium from '../fonts/UntitledSansTest-Medium.woff'
import UntitledSansBold from '../fonts/UntitledSansTest-Bold.woff'

export default () => injectGlobal`
  ${styledNormalize}

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #37393C;
    font-weight: 400;
    line-height: 1.7;
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
  @font-face {
    font-family: 'Untitled-Sans';
    font-weight: 400;
    src: url(${UntitledSans}) format('woff')
  }
  @font-face {
    font-family: 'Untitled-Sans';
    font-weight: 500;
    src: url(${UntitledSansMedium}) format('woff')
  }
  @font-face {
    font-family: 'Untitled-Sans';
    font-weight: 600;
    src: url(${UntitledSansBold}) format('woff')
  }
`