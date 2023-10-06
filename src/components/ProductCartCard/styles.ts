import styled from "styled-components";

export const ProductCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        padding: 0.5rem;
    }
`

export const ProductCartInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    .productImage {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 6rem;
        height: 6rem;
        border: 1px solid var(--gray-200);
        border-radius: 6px;
        background-color: var(--gray-100);

        img {
            width: 90%;
            height: 90%;
        }
    }

    .titleDescription {
        max-width: 15rem;

        @media screen and (max-width: 1020px) {
        
        }
    }

    @media screen and (max-width: 1020px) {
        .productImage {
            max-width: 4rem;
            max-height: 4rem;
            width: 90%;
            height: 90%;
        }

        gap: 1rem;
    }
`

export const ProductCartDetails = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;

    button {
        padding: 0.5rem;
    }

    @media screen and (max-width: 1020px) {
        gap: 1rem;
    }
`

