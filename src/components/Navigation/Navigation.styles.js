import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height: 8rem;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0px 0px 1rem black;
`

export const Input = styled.input`
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    text-align: center;
    border: none;

    :focus {
        background-color: #ddd;
        outline: none;
    }
`

export const Button = styled.button`
    border: none;
    border-radius: 0;
    background-color: ${ ({color}) => color };
    font-family: system-ui;
    font-weight: bold;
    font-size: 1.5rem;
    transition: .5s;
    color: var(--var-color-dark);

    :active {
        background-color: #fff;
    }
`