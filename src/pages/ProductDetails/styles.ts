import styled from "styled-components";

export const ProductDetailsContainer = styled.main``

export const ProductInformationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10rem;
    padding: 2.5rem 0;

    @media screen and (max-width: 1020px) {
       display: flex;
       gap: 2rem;
       flex-direction: column;
    }
`

export const ProductImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .mainImage {
       width: 100%;
       max-height: 28rem;
       border: 1px solid var(--gray-200);
       border-radius: 6px;

       background-color: var(--gray-100);

       display: flex;
       align-items: center;
       justify-content: center;

       img {
            width: 99%;
            height: 99%;
       }

        @media screen and (max-width: 1020px) {
            height: 30rem;
            width: 30rem;
        }

        @media screen and (max-width: 700px) {
            max-height: 15rem;
            width: 15rem;
        }
    }

    .secondaryImages {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 7rem;

        div {
            border: 1px solid var(--gray-200);
            border-radius: 6px;
            padding: 0.1rem;
            width: 7rem;
            max-height: 100%;
            background-color: var(--gray-100);
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                border-radius: 6px;
                width: 90%;
                height: 90%;
            }

            &:hover {
                border: 1px solid var(--gray-300);
            }
        }

        @media screen and (max-width: 1020px) {
            height: 4rem;

            div {
                width: 4rem;
            }
        }
    }
`

export const ProductInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
        border-bottom: 1px solid var(--gray-100);
        padding-bottom: 2rem;
        @media screen and (max-width: 700px){
            display:flex;
            align-items:center;
            flex-direction: column;
            padding-bottom: 0;
        }   
    }

    b {
        font-size: var(--title-size);
    }

    .quantity {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        @media screen and (max-width: 700px){
            flex-direction: column;
        }
        div {
            display: flex;
            flex-direction: row;
            padding: 0.5rem;
            gap: 0.5rem;
            background-color: var(--gray-100);
            width: fit-content;
            border-radius: 6px;

            button {
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                background: none;
            }

            span {
                width: 3rem;
                text-align: center;
            }
        }
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        button {
            width: 100%;
        }
    }
`

export const ProductDescription = styled.div``