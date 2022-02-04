import { createGlobalStyle } from 'styled-components';
import font from '../font/PressStart2P.woff2'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "8bit";
        src: url(${font}) format('woff2');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px;

        @media only screen and (min-width: 1500px) {
            font-size: 70%;
        }
    }

    body {
        background-color: #f44336;
        font-family: "8bit";
    }

    .container {
        display: grid;
        min-height: 100vh;
        align-content: center;
        justify-content: center;

        @media only screen and (max-width: 540px) {
            min-height: auto;
            align-content: start;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes blink {
        0% {
           transform: scale(1); 
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1); 
        }
    }

`

export default GlobalStyle;
