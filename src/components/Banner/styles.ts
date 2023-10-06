import styled from "styled-components";

export const BannerContainer = styled.section`
    width: 100%;
    min-height: 18rem;
    background: var(--banner-bg);
    border-radius: 6px;
    padding: 0rem 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px) {
        display: flex;
        justify-content: center;

        h2 {
            font-size: 1.7rem !important;
        }

        img {
            display: none;
        }
    }
`

export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2 {
        font-size: var(--title-banner);
    }
`

export const BannerImage = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 18rem;
    }
`