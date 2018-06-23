import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import UntitledSans from '../fonts/UntitledSansTest-Light.woff'
import UntitledSansBold from '../fonts/UntitledSansTest-Bold.woff'

export default () => injectGlobal`
  ${styledNormalize}

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #494E72;
    font-weight: 400;
    line-height: 2.2em;
  }
  @font-face {
    font-family: 'Untitled-Sans';
    font-weight: 400;
    src: url(${UntitledSans}) format('woff')
  }
  @font-face {
    font-family: 'Untitled-Sans';
    font-weight: 600;
    src: url(${UntitledSansBold}) format('woff')
  }
`