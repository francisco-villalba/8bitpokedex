import styled from "styled-components";

export const Wrapper = styled.div`
    grid-row: 2 / 3;
    width: 35rem;
    height: 45rem;
    border-radius: .5rem;
    box-shadow: 0px 0px 3rem black;
    display: grid;
    grid-template-rows: repeat(2, max-content);
    align-content: space-between;
    padding: 2rem;

    @media only screen and (max-width: 540px) {
        border-radius: 0;
        box-shadow: none;
    }
`;