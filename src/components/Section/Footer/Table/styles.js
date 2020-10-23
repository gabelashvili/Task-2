import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`
export const TableHead = styled.thead`
  background-color: #2B2E3A;
  border-collapse: collapse;
  font-size: 0.9375rem;
  letter-spacing: 0px;
  color: #B5B7BE;
  opacity: 1;
`
export const TableBody = styled.tbody`
  & tr:nth-child(odd){
    background-color: #252630;
  };
  font-size: 0.9375rem; 
`
export const Tr = styled.tr`
  border-bottom: 2px solid #202126;
`

export const Th = styled.th`
  height: 3.3125rem;
`

export const Td = styled.td`
  text-align: center;
  height: 3.3125rem;
`
export const IconWrapper = styled.div`
  & > svg {
    width: 1.25rem;
    fill: #454FB4;
  };
    border-right: 3px solid #383946;
    opacity: 1;
`
export const TimeWrapper = styled.div`
   & > svg {
    width: 1.25rem;
    fill: #B2A2D8;
    margin-right: 0.8125rem;
  };
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9375rem;
  font-weight: 500;
`

export const Coefficient = styled.p`
  margin: 0;
  width: 3.875rem;
  height: 1.625rem;
  background: #323341 0% 0% no-repeat padding-box;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFD919;
  margin: auto;
`

export const PlayerName = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    width: 1.375rem;
    margin-right: 0.9375rem;
  }
`

export const Wins = styled.p`
  margin: 0;
  width: 4.5625rem;
  height: 1.625rem;
  background: #5F39B7 0% 0% no-repeat padding-box;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFD919;
  margin: auto;
`
