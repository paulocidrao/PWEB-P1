import styled from "styled-components";

export const CartContainer = styled.main`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
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
`

export const DeliveryInformation = styled.section``