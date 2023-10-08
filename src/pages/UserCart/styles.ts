import styled from "styled-components";

export const CartContainer = styled.main`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    header {
        display: flex;
        justify-content: space-between;

        button {
            padding: 0.5rem 1rem;
        }
    }

    section {
        border: 1px solid var(--gray-200);
        padding: 1rem;
        border-radius: 6px;

        @media screen and (max-width: 1020px) {
            padding: 0.5rem;
    }
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    &.emptyCart {
        display: flex;
        justify-content: center;
        align-items: center;

        a button {
            width: 100%;
        }
    }

    @media screen and (max-width: 1020px) {
        display: flex;
        flex-direction: column;
    }
`
export const ProductList = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const PaymentInformation = styled.section`
    height: 30rem;
    position: sticky;
    top: 148px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 700px){
            justify-content:start;
            height:21rem;
        }

    .paymentMethods {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media screen and (max-width: 700px){
            margin-bottom: 2rem;
        }
        ul {
            list-style: none;
            
            li {
                &:not(:first-child) {
                    margin-top: 0.5rem;
                }

                div {
                    display: flex;
                    gap: 0.5rem;
                }
            }
        }
    }

    .confirmOrder {
        button {
            margin-top: 1.5rem;
            width: 100%;
        }
    }

    p {
        font-size: var(--title-size);
        font-weight: bold;
    }
`

export const DeliveryInformation = styled.section``