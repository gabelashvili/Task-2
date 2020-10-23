import styled from 'styled-components'

export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.625rem;
    grid-row-gap: 0.625rem;
    & > div:nth-child(${({
    selectedTableIndex,
    isLastTableOfColumn,
  }) => (isLastTableOfColumn ? selectedTableIndex : selectedTableIndex + 2)}){
        display: none;
    }
`
