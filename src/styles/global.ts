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
        max-width: 85rem;
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
        --success-color: #4BB543;
        --danger-color: #ef233c;

        /* Tamanhos de Fonte */
        --title-banner: 2.25rem;
        --title-size: 1.5rem;
        --subtitle-size: 1.125rem;
        --paragraph-size: 1rem;
        --link-size: 0.875rem;
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

    body {
        @media screen and (max-width: 1400px) {
            font-size: 90%;
        }

        @media screen and (max-width: 1020px) {
            font-size: 85%;
        }

        @media screen and (max-width: 700px) {
            font-size: 85%;
        }
        @media screen and (max-width: 500px) {
            font-size: 95%;
        }
    }
`;