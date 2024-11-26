import styled from "styled-components";


export const TaskContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 736px;
    height: 287px;
    gap: 10px;
    margin-top: 64px;
`

export const Infos = styled.header `
    display: flex;
    justify-content: space-between;
`

export const InfoStrong = styled.strong `
    color: var(--Blue);
`

export const TasksFinalized = styled.strong `
    color: var(--Purple);
`

export const MessageOfInfo =  styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--Gray-300);
    margin-top: 24px;
    padding: 54px 24px ;
    border-top: 1px solid var(--Gray-300) ;
    border-radius: 8px;
`

export const IconImage = styled.img ` 
    width: 56px;
    height: 56px;
    margin-bottom: 10px;
`
