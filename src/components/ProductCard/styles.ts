import styled from "styled-components";

export const CardContainer = styled.div` 
    width: 20rem;
    min-height: 28rem;
    height: 100%;
    border: 1px solid var(--gray-200);
    border-radius: 6px;
    transition: 0.2s;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    a {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--text-color);
        padding: 1rem 1rem 0 1rem;

        p > b {
            font-size: var(--title-size)
        }

        img {
            border-radius: 6px; 
            max-height: 15rem;
            height: 100%;
        }
    }

    button {
        margin: 1rem;
        padding: 0.8rem 1rem;
    }

    &:hover {
        border-color: var(--gray-300);
    }
`