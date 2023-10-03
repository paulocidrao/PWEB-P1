import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    padding: 1rem 2rem;
    border: none;
    border-radius: 6px;
    color: #FFF;
    background: var(--primary-color);
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: var(--paragraph-size);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
`