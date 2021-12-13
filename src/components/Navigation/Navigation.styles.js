import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height: 7rem;
`

export const Input = styled.input`
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    text-align: center;
`

export const Button = styled.button`
    /* border: none; */
    border-radius: 0;
    background-color: ${ ({color}) => color };
    font-weight: bold;
`