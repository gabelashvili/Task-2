import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const Tr = styled.tr`
    border-radius: 5px;
    border-bottom: 1px solid #35364A;
    & > td:first-child {
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
    }
    & > td:last-child {
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
    };
`

export const Th = styled.th`
    font-size: 14px;
    color: #CAD0F1;
    font-weight: 500;
    padding-bottom: 5px;
`

export const Td = styled.td`
    height: 4.125rem;
    background: #444563;
    width: 15%;
    text-align: center;
`

export const Players = styled.p`
    margin: 0;
    display: flex;
    & > svg {
        width: 1.125rem;
        margin-right: 5px;
    }
`
