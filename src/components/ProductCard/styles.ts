import styled from "styled-components";

export const CardContainer = styled.div`     
    a {
        width: 18rem;
        min-height: 28rem;
        height: 100%;
        border: 1px solid var(--gray-200);
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        text-decoration: none;
        color: var(--text-color);
        transition: 0.2s;

        img {
            max-height: 15rem;
        }

        &:hover {
            border-color: var(--gray-300);
        }
    }
`