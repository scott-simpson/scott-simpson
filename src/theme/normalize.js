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
    line-height: 2.2em;
  }
  img {
    display: block;
    max-width: 100%;
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