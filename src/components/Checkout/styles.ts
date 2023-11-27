import styled from "styled-components";

export const Container = styled.section`
  display:flex;
  width:85%;
  justify-content: center;
  flex-direction: column;
  z-index:1;
  box-shadow: 0px 0px 82px -3px rgba(0,0,0,0.1);
`;

export const Tittle = styled.h1`
  font-size: 2rem;
  align-self: center;
`;

export const Concluir = styled.button`
  width: 25%;
  padding: 0.5rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  margin-right: 3.5rem;
  align-self: end;
  background: var(--primary-color);
  border: none;
  border-radius: 0.25rem; 
  font-size:0.85rem;
  font-weight: 500;
`;

export const Cancelar = styled.button`
  font-size: 0.95rem;
  align-self: center;
  align-self: end;
  background: none;
  border:none;
  width:1.5rem;
  margin-top: 1rem;
  margin-right: 1rem;
  font-weight: 500;
`;

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
`;

