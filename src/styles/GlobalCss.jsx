import { createGlobalStyle } from 'styled-components'

const GlobalCss = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);

  body {
    color: #333;
    font-weight: 300;
    font-size: 17px;
    font-family: 'Spoqa Han Sans', 'Nanum Gothic', sans-serif;
    line-height: 1.5;
    word-break: keep-all;

    background-color: white;
  }

  a {
    color: #333;
    text-decoration: none;
  }
`

export default GlobalCss;
