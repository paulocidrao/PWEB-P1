import styled from "styled-components";

export const Container = styled.section`
 display: flex;
width: 85%;
height: 85%;
justify-content: center;
align-items: center; 
flex-direction: column;
box-shadow: 0px 0px 82px -3px rgba(0, 0, 0, 0.1);
padding-bottom: 2rem;

`;

export const Tittle = styled.h1`
  font-size: 2rem;
  align-self: start;
  margin-left: 0.5rem;
`;

export const Concluir = styled.button`
  width: 25%;
  padding: 0.5rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  margin-right: 3.5rem;
  align-self: end !important;
  background: var(--success-color);
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem; 
  font-size:0.85rem;
  font-weight: 500;
  border-radius: 1rem;
`;
export const Cancelar = styled.button`
  font-size: 0.95rem;
  align-self: end !important;
  background: none;
  border:none;
  width:1.5rem;
  margin-top: 1rem;
  margin-right: 1rem;
  font-weight: 500;
`;

export const ContentContainer = styled.div`
    flex-direction: row;
    align-items: start !important;
    gap: 2rem;
`

export const Total = styled.p`
  background: var(--gray-200);
  width:25%;
  padding:1rem;
  font-weight: 700;
  border-radius: 1rem;
  align-self: end;
  margin-bottom: 0.75rem;
  margin-right: 3.5rem;
  text-align:center;
`