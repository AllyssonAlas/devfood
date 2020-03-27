import {createGlobalStyle} from 'styled-components'

import px2vw from '../utils/px2vw'

export default createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
 }

  html, body, #root {
    font-size: ${px2vw(20)};
    min-height: 100%;
    padding-top: 1.8rem;
    display: flex;
    flex: 1;

    @media (max-width: 768px) {
      padding-top: 2.2rem;
    }

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 992px) {
      font-size: ${px2vw(16)};
    }
  }

   body, input, button, select, textarea {
    font-family: 'Baloo Thambi 2', Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
  }

   @media (max-width: 768px) {
       input, button, select, textarea {
        font-size: 2rem;
      }
    }

`
