import { createGlobalStyle } from 'styled-components';
import PressStart from '../font/PressStart2P.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "8bit";
        src: url(${PressStart}) format("truetype");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px

        /* @media only screen and (max-width: $bp-largest) {
            font-size: 50%;
        } */
    }

    body {
        background-color: #f44336;
    }

    .container {
        display: grid;
        grid-template-rows: 10rem 1fr;
        justify-items: center; 
    }

    // Custom animations
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

    @keyframes fadeIn {
        50% {
            opacity: .5;
        }
    
        100% {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 540px) {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export default GlobalStyle;
