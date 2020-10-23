import React from 'react'
import styled from 'styled-components'

export const Div = styled.div`
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
    display: flex;
`

export const Type = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin-right: 4.75rem;
`

export const Text = styled.p`
    margin: 0;
    width: max-content;
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.0625rem;
`

export const BorderBottom = styled.div`
    display: flex;
    align-items: center;
`

export const Line = styled.div`
    width: 132px;
    height: 0.25rem;
    background: #6D728E 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    margin-right: 5px;
`

export const Dot = styled.div`
    width: 0.375rem;
    height: 0.375rem;
    background: #FFD919 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
`

const Tabs = () => (
  <Div>
    <Type>
      <Text>
        ტოპ მოგებები
      </Text>
      <BorderBottom>
        <Line />
        <Dot />
      </BorderBottom>
    </Type>
    <Type>
      <Text>
        ლიდერბორდი
      </Text>
    </Type>
    <Type>
      <Text>
        ისტორია
      </Text>
    </Type>
    <Type>
      <Text>
        წესები
      </Text>
    </Type>
  </Div>
)

export default Tabs
