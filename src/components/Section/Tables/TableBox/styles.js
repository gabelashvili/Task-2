/* eslint-disable max-len */
import styled, { keyframes } from 'styled-components'

const registeredGrid = ` 
    "type type value prize"
    "WaitOponents WaitOponents WaitOponents WaitOponents"
    "registeredPlayers registeredPlayers registeredPlayers registeredPlayers"
    "Waiting Waiting Waiting Waiting"
    ". . . registeredButton"
`
const defaulGrid = `
    "type . ."
    "prize prize prize"
    "registeredPlayers registeredPlayers registeredPlayers"
    "value value value"
    "registeredButton registeredButton registeredButton"
`

const isStartingGrid = `
    "type type value prize"
    "Cards Cards Cards Cards"
    "registeredPlayers registeredPlayers registeredButton registeredButton"
`

export const Div = styled.div`
    background-color: ${(
    { isRegisteredClicked },
  ) => (isRegisteredClicked ? '#198A9C' : '#5F39B7')};
    height: 21.3125rem;
    border-radius: 3px;
    display: grid;
    grid-template-areas: ${({ isRegisteredClicked, isStarting }) => {
    if (isRegisteredClicked && !isStarting) {
      return registeredGrid
    }
    if (isStarting) {
      return isStartingGrid
    }
    return defaulGrid
  }};
    padding: 0.8125rem 0.875rem;
    grid-column: ${(
    { isRegisteredClicked },
  ) => isRegisteredClicked && 'auto / span 2'};
`
export const Type = styled.div`
    grid-area: type;
    width: max-content;
`

export const Text = styled.p`
    margin: 0;
    width: max-content;
    font-weight: medium;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    margin-bottom: ${({ isRegisteredClicked }) => (isRegisteredClicked && '1.375rem')};
    
`

export const BorderBottom = styled.div`
    display: flex;
    align-items: center;
`

export const Line = styled.div`
    width: 4.875rem;
    height: 0.25rem;
    background: #95C7EE 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    margin-right: 5px;
`

export const Dot = styled.div`
    width: 0.375rem;
    height: 0.375rem;
    background: #6FF27B 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
`
export const PrizeAmountDesc = styled.p`
    margin: 0;
    font-weight: medium;
    font-size: 1rem;
`
export const PrizeAmount = styled.p`
    margin: 0;
    font-size: 3.75rem;
    font-weight: 600;
`

export const Prize = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p {
        align-self: ${({ isRegisteredClicked }) => (isRegisteredClicked && 'flex-end')};
    }
    align-items: center;
    height: min-content;
    grid-area: prize;
    & ${PrizeAmountDesc} {
        display: ${({ isRegisteredClicked }) => (isRegisteredClicked && 'none')};
    }
    & ${PrizeAmount} {
        line-height: ${({ isRegisteredClicked }) => (isRegisteredClicked ? 0.8 : 1)};
    }

`

export const PrizeAmountCurrenct = styled.span`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    margin-left: 0.5rem;
`

export const RegisteredPlayer = styled.div`
    grid-area: registeredPlayers;
    display: grid;
    grid-auto-flow: column;
    width: min-content;
    grid-column-gap: ${({ isRegisteredClicked, isStarting }) => {
    if (isRegisteredClicked && !isStarting) {
      return '4.0625rem'
    }
    if (isRegisteredClicked && isStarting) {
      return '23%'
    }
    return '1.25rem'
  }};
    margin: 0 auto;
    & svg{
        width: ${({ isRegisteredClicked }) => (isRegisteredClicked ? '2.375rem' : '1.4375rem')};
        height: ${({ isRegisteredClicked }) => (isRegisteredClicked ? '2.375rem' : '1.4375rem')};
    }
    align-self: ${({ isStarting }) => isStarting && 'center'};
`
export const Value = styled.div`
    width: 7.0625rem;
    height: 2.375rem;
    background: #FFE926 0% 0% no-repeat padding-box;
    border-radius: 19px;
    font-size: 1rem;
    color: #000000;
    display: flex;
    align-items:center;
    justify-content: center;
    font-weight: medium;
    justify-self: end;
    cursor: pointer;
    margin-left: ${({ isRegisteredClicked, isStarting }) => ((isRegisteredClicked && !isStarting) && '6.8438rem')};
    grid-area: value;
    justify-self: ${({ isRegisteredClicked }) => ((isRegisteredClicked) ? 'end' : 'center')};
    margin-top: ${({ isStarting }) => isStarting && '4px'};
    align-self: ${({ isRegisteredClicked, isStarting }) => {
    if (isRegisteredClicked && !isStarting) {
      return 'center'
    }
    if (isStarting) {
      return 'auto'
    }
    return 'auto'
  }};

`
export const RegisteredButton = styled.button`
    width: ${({ isRegisteredClicked }) => (isRegisteredClicked ? '8.125rem' : '100%')};
    height: 3.875rem;
    background: ${({ isRegisteredClicked }) => (isRegisteredClicked ? '#1A6F7D' : '#764ED4')};
    border-radius: 5px;
    opacity: 1;
    display: flex;
    align-items:center;
    justify-content: center;
    font-weight: medium;
    font-size: 1.1875rem;
    letter-spacing: 0px;
    opacity: 1;
    border: none;
    color: white;
    &:focus {
        outline: none;
    }
    grid-area: registeredButton;
    justify-self: end;
    align-self: center;
`

export const WaitOponents = styled.p`
    grid-area: WaitOponents;
    font-weight: medium;
    font-size: 1.25rem;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    justify-self: center;
    margin: 0;
    margin-bottom: 1.75rem;
    margin-top: 2.4375rem;
`
export const Waiting = styled.div`
    grid-area: Waiting;
    justify-self: center;
    margin-top: 2.25rem;
`

export const WaitingText = styled.p`
    font-weight: medium;
    font-size: 0.875rem;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    justify-self: center;
    margin: 0;
    margin-bottom: 0.9375rem;
    display: flex;
    justify-content: center;
`

const indeterminateFirst = keyframes`
    0% {
        left: -100%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
`

const indeterminateSecond = keyframes`
     0% {
        left: -150%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
`

export const LinearActivity = styled.div`
    overflow: hidden;
    width: 50%;
    height: 0.1875rem;
    background-color: #26C6DF;
    border-radius: 6px;
    width: 19.625rem;
`

export const Indeterminate = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    &::before {
        content: '';
    position: absolute;
    height: 100%;
    background-color: #17FF4D;
    border-radius: 6px;
    animation: ${indeterminateFirst} 1.5s infinite ease-out;
    &::after {
        content: '';
    position: absolute;
    height: 100%;
    background-color: #4FC3F7;
    animation: ${indeterminateSecond} 1.5s infinite ease-in;
    }
    }
`
export const Cards = styled.div`
    grid-area: Cards;
    display: grid;
    grid-column-gap: 1.25rem;
    justify-content: center;
    grid-auto-flow: column;
`
export const Coefficient = styled.p`
    font-weight: 600;
    font-size: 3.75rem;
`
export const PrizeImg = styled.img`
    width: 90%;
    height: 80%;
`
