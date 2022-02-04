import styled from "styled-components";

export const Wrapper = styled.div`
    width: 35rem;
    border-radius: .5rem;
    box-shadow: 0px 0px 3rem black;
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-row-gap: 2rem;
    padding: 2rem;

    @media only screen and (max-width: 540px) {
        border-radius: 0;
        box-shadow: none;
    }
`;