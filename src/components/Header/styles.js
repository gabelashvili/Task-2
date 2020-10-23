import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 6.625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const LeftSide = styled.div`
    display: grid;
    grid-template-columns: minmax(10%, 19.375rem) minmax(10%, 19.75rem) 1fr;
    margin-right: 4.375rem;
`
export const RightSide = styled.div`
    display: flex;
`

export const Logo = styled.div`
    & svg {
        fill: #ff0;
        width: 3.125rem;
        height: 2.75rem;
    }
`
export const Jackpot = styled.div`
    width: min-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const JackpotBox = styled.div`
    width: ${({ isStandart }) => (isStandart ? '1.6875rem' : '1.4375rem')};
    height: ${({ isStandart }) => (isStandart ? '2.125rem' : '1.8125rem')};
    background: ${({ isStandart }) => (isStandart
    ? '#505081 0% 0% no-repeat padding-box'
    : '#40406D 0% 0% no-repeat padding-box')};
    letter-spacing: 0rem;
    color: ${({ isStandart }) => (isStandart ? '#D6D9D9' : '#9AAACF')};
    display: flex; 
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: ${({ isStandart }) => (isStandart ? '1.25rem' : '1rem')};
    border-radius: 0.3125rem;
`
export const BoxWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 0.1875rem;
    align-items: flex-end;
`
export const Dot = styled.p`
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background: #505081 0% 0% no-repeat padding-box;
    margin: 0;
`
export const JeckpotDesc = styled.p`
    font-weight: bold;
    font-size: 0.9375rem;
    letter-spacing: 0rem;
    color: #98AAC2;
    margin: 0;
    margin-top: 0.5625rem;
`
export const Cashier = styled.button`
    width: 7.125rem;
    height: 2.5625rem;
    background: #FFCA2A 0% 0% no-repeat padding-box;
    border-radius: 1.3125rem;
    opacity: 1;
    border: none;
    &:focus {
        outline: none;
    }
    & svg {
        width: 1.125rem;
        height: 1.1875rem;
        margin-right: 0.5313rem;
    }
    font-size: 0.9375rem;
    font-weight: medium;
    letter-spacing: 0rem;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4.0625rem;
`
export const Setting = styled.div`
    fill: #afbbc4;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1.5rem;
    align-items: center;
`
