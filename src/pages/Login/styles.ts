import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex; 
    width: 100%;
    height: 100vh;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
`

export const Banner = styled.div`
    width: 100%;
    background-color: var(--gray-300);

    img {
        width: 20rem
    }
`;

export const LoginFormContainer = styled.div`
    width: 100%;
    background-color: var(--background);

    p {
        color: var(--gray-300);
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 30rem;
        width: 100%;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        input {
            padding: 1rem 2rem;
            width: 100%;
            border: 1px solid ;
            border-radius: 6px;
            background: var(--gray-100);
            color: var(--text-color);
            
            &:focus {
                outline-color: var(--primary-color); 
                outline-width: 2px; 
                outline-style: solid;
            }
        }

        span {
            width: fit-content;
            margin-left: auto;
            color: var(--gray-300);
            
            a {
                text-decoration: underline;
            }
        }
    }
`;