import { createGlobalStyle } from 'styled-components';

import fonts from './fonts';

export default createGlobalStyle`

  ${fonts}
  :root {
    --blue: #2684ff;
    --blue-hover: #1f6fd6;
    --font-black: #333;
    --border: #ccc;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: 'Proxima Nova', sans-serif;
    font-size: 16px;
    line-height: 1.2;
    color: var(--font-balck);
  }
  
  li {
    list-style: none;
  }
  input, select, textarea {
    border: none;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
