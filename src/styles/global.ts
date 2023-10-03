import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background: var(--primary);
        font-family: 'Poppins', sans-serif;
        width: 100%;
        max-width: 80rem;
        margin-right: auto;
        margin-left: auto;
    }

    :root {
        /* Cores */
        --primary-color: #3498db;
        --bg-color: #ffffff;
        --text-color: #333333;
        --title-color: #111111;
        --gray-100: #f5f5f5;
        --gray-200: #ccc; 
        --gray-300: #666;
        --banner-bg: #F4F1ED;

        /* Tamanhos de Fonte */
        --title-banner: 36px;
        --title-size: 24px;
        --subtitle-size: 18px;
        --paragraph-size: 16px;
        --link-size: 14px;
    }

    button {
        cursor: pointer;
    }

    button, textarea, input {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
        color: var(--primary-color);
    }
`;