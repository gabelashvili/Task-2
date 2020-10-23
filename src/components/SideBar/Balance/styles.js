import styled from 'styled-components'

export const Div = styled.div`
    background: #35364A;
    border-radius: 5px;
    width: '100%';
    display: flex;
    padding: 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const History = styled.div`
    border: 1px solid #60667E;
    border-radius: 18px;
    opacity: 1;
    width: 7.375rem;
    height: 2.1875rem;
    & svg {
        width: 1.1875rem;
        height: 1.1875rem;
        fill: #C5D8F9;
        margin-right: 5px;
    };
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 0.875rem;
    color: #C5D8F9;
`

export const HistoryWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const Logo = styled.div`
    width: 7.4375rem;
    height: 7.4375rem;
    border-radius: 50%;
    border: 8px solid #9C75F8;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
        width: 2.8125rem;
        fill: #ff0;
    };
    background-color: #5936B1;
    margin: 0.875rem 0;
`
export const Player = styled.p`
    font-size: 1.625rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1.125rem;
`
export const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 27px;
  padding: 0.75rem 1.5625rem 0.75rem 0.75rem;
  align-items: center;
  margin-bottom: 0.625rem;
  width: 17.5rem;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    & > svg {
        width: 1.6875rem;
        margin-right: 0.625rem;
    };
`
export const Text = styled.p`
    margin: 0;
`
export const Value = styled.p`
    margin: 0;
`
export const ModalTitle = styled.p`
    font-size: 1.0625rem;
    font-weight: 500;
    margin-bottom: 1.0625rem;
`

export const ModalWrapper = styled.div`
    padding: 0.625rem; 
`
