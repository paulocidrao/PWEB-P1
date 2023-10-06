import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2.5rem 0;
`

export const ProductsFeed = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    margin: auto;

    @media screen and (max-width: 1400px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1020px) {
    display: flex;
        flex-wrap: wrap;
        justify-content: center;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`