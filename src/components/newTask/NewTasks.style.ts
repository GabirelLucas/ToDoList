import styled from "styled-components";

export const ContaineNewTask =  styled.div `
    display: flex;
    width: 736px;
    margin-top: -30px;
`

export const FormContainer = styled.form`
    display: flex;
    gap: 8px;

`

export const InputNewTask = styled.input `
    background-color: var(--Gray-500);
    width: 638px;
    height: 52px;
    border: none;
    border-radius: 8px;
    color: var(--Gray-300);
    padding: 16px;
    font-family: Roboto-mono, sans-serif;
    outline: none;

    &:focus {
        outline: 1px solid var(--Purple);
    }
`


export const CreateButton = styled.button `
    display: flex;
    padding: 16px;
    align-items: center;
    align-content: center;
    width: 90px;
    height: 52px;
    background-color: var(--BlueDark);
    border-radius: 8px;
    border: none;
    gap:8px;
    color: var(--Gray-100);
    font-size: 14px;
    font-weight: 700;

    &:not(:disabled):hover {
        background-color: var(--Blue);
    }

    &:disabled {
        opacity: 0.9;
    }
`



