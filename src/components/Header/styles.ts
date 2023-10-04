import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    background: var(--bg-color);
    border-bottom: 1px solid var(--gray-100);
    
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;

    .headerActions {
        display: flex;
        align-items: center;
        gap: 2rem;
    };

    .logoDiv {
        display: inline-flex;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--title-color)
    }

    img {
        width: 2rem;
    }
`

export const SearchInput = styled.input.attrs({
    type: 'text'
})`
    padding: 0.5rem 1rem;
    width: 25rem;
    border-radius: 999px;
    border: 1px solid var(--gray-200);
`

export const ActionButton = styled.button`
    border-radius: 999px;
    border: 1px solid var(--gray-200);
    background: none;
    cursor: pointer;
    transition: 0.2s;
    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover{
        background-color: var(--gray-100);
        border-color: var(--gray-300)
    }
`

export const HeaderNavigation = styled.nav`
    display: flex;
    gap: 1rem;

    a {
        text-decoration: none;
        color: var(--text-color);
        transition: 0.2s;

        &:hover {
            text-decoration: underline;
            opacity: 0.8;
        }
    }
`