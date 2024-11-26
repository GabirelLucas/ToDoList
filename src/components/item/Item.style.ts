import styled from "styled-components";

export const ContainerItem = styled.div ` 
    display: flex;
    justify-content: space-between;
    width: 736px;
    height: 72px;
    padding: 16px;
    border-radius: 8px;
    background-color:var(--Gray-500);
    color: var(--Gray-300);

    img {
    height: 24px;
}
`

export const TrashContainer = styled.img `
    &:hover {
        background-color: var(--Gray-400);
        border-radius: 4px;
    }
`


export const ContainerCheck = styled.button ` 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 22px;
    height: 22px;
    background-color: var(--Gray-500);
    border:none;
    
`

export const ContainerButton = styled.button ` 
    display: flex;
    width: 25px;
    height: 25px;
    background: transparent;
    align-items: center;
    border: none;
`

export const NameOfTask = styled.p ` 
    color: var(--Gray-100);
    font-size: 14px;
    font-weight: 400;
`