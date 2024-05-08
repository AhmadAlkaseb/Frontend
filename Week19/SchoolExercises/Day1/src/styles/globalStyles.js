import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {
    // Purple
    --color-1: #be123c;
    --color-2: ##14b8a6;
    --color-3: #be123c;
    --color-4: ##2563eb;
    --color-5: ##9333ea;

    // Gray
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        font-family: 'Jersey 25 Charted', 'sans-serif';
        color: black;
    }
`;

export default GlobalStyles;