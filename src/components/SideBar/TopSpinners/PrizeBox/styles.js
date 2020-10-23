import styled from 'styled-components'

export const Div = styled.div`
    background: #444563 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    padding: 0.75rem;
    margin-bottom: 0.625rem;
`
export const Header = styled.div`
    display: flex;
    justify-content:space-between;
`

export const Amount = styled.p`
    margin: 0;
    font-size: 2.3125rem;
    font-weight: 600;
    letter-spacing: 0px;
    color: #39B7FF;
    opacity: 1;
`
export const AmountType = styled.span`
    font-size: 0.75rem;
    margin-left: 0.3125rem;
`

export const Date = styled.div`
    opacity: 0.55;
    display: flex;
    align-items: baseline;
    & svg{
        width: 0.9375rem;
        fill: #b2a2d8;
        margin-right: 0.6875rem;
    }
    display: flex;
`

export const DateText = styled.p`
    margin: 0;
`

export const Participants = styled.div`
    & > svg {
        width: 1.125rem;
        margin-right: 0.4375rem;
    };
    display: flex;
    align-items: center;
    margin-top: 0.625rem;
`
export const Players = styled.p`
    margin: 0;
    font-size: 0.9375rem;
    font-weight: 500;
    margin-right: 1.125rem;
`

export const PlusIcon = styled.p`
    margin: 0;
    width: 1.1875rem;
    height: 1.1875rem;
    background: #575875 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9375rem;
    cursor: pointer;
`

export const Wins = styled.p`
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0px;
    color: #D2EFFF;
    opacity: 1;
    margin-top: 0.625rem;
`
