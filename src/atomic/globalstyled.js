import { createGlobalStyle, css } from 'styled-components';

const sizes = {
  desktop: 1080,
  midium: 985,
  miniDesktop: 930,
  tablet: 640,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const GlobalStyle = createGlobalStyle`
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    line-height: 1.35;
  }
  b {
    font-weight: bold;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  body,
  html {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  h1 {
    font-size: 32px;
  }

  a:active,
  a:hover,
  a:link,
  a:visited {
    text-decoration: none;
  }

  .clear {
    clear: both;
  }

  pre {
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: auto;
    overflow-y: hidden;
    font-size: 12px;
    line-height: 20px;
    background: #efefef;
    border: 1px solid #777;
    background: url(lines.png) repeat 0 0;
    padding: 10px;
    color: #333;
  }

  html, body {
    height: 100%;
  }
  

  body,
  html {
    margin: 0;
    color: #2b2b2b;
    background: #fff;
    font-family: AppleSDGothicNeo, Apple SD Gothic Neo, 애플 SD 산돌고딕 Neo, 나눔고딕, "NanumGothic", "맑은 고딕", "Malgun Gothic", Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    max-width: 1440px;
    margin: 0 auto;
    padding: 96px 24px 24px;
  }

  .single main {
    padding: 64px 0 24px;
  }

  button {
    border: none;
    background: white;
  }

  input, textarea {
    /* ios safari inner box shadow remove */
    -webkit-appearance: none;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #bbbcbc;
      opacity: 1; /* Firefox */
      line-height: 1.57;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #bbbcbc;
      line-height: 1.57;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #bbbcbc;
      line-height: 1.57;
    }

    &::-webkit-input-placeholder {
      line-height: 1.57 !important;
    }
  }

  textarea, button, input[type="text"], input[type="password"], a {
    font-family: AppleSDGothicNeo, Apple SD Gothic Neo, 애플 SD 산돌고딕 Neo, 나눔고딕, "NanumGothic", "맑은 고딕", "Malgun Gothic", Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
    &:focus, &:active {
      outline: none;
    }
  }
  
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::-ms-clear, input::-ms-reveal {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    main {
      padding: 96px 48px 24px;
    }
  }

  @media only screen and (min-width: 1280px) {
    .single main {
      padding: 96px 0 24px;
    }
  }
`;

export default GlobalStyle;
