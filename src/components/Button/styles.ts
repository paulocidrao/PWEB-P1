import styled, { css } from "styled-components";

interface ButtonStyleProps {
    border: 'corner' | 'full-rounded';
    background: 'none' | 'primaryColor' | 'successColor' | string;
}

export const ButtonContainer = styled.button<ButtonStyleProps>`
    display: flex;
    gap: 0.5rem;
    padding: 1rem 2rem;

    ${(props) => props.background === 'none' && css`
        background: none;
    `}

    ${(props) => props.background === 'primaryColor' && css`
        background: var(--primary-color);
    `}

    ${(props) => props.background === 'successColor' && css`
        background: var(--success-color);
    `}

    color: ${(props) => props.background === 'none' ? 'var(--text-color)' : '#FFF'};

    border: ${(props) => props.background === 'none' ? '1px solid var(--gray-200)' : 'none'};

    border-radius: ${(props) => (props.border === 'corner' ? '6px' : '32px')};

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

    @media screen and (max-width: 1020px) {
        padding: 0.5rem 0.5rem !important;
    }
`