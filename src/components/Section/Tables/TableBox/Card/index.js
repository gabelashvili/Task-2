import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width: 13.9375rem;
    height: 9.0625rem;
    border: 2px solid #56BEC9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Title = styled.p`
    position: absolute;
    bottom: -7px;
    margin: 0;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    font-weight: medium;
    font-size: 1rem;
    background-color: ${(
    { backgroundColor },
  ) => (backgroundColor || '#198A9C')};
    padding: 0 5px;
`

const Card = ({ children, title, backgroundColor }) => (
  <Div>
    {children}
    <Title backgroundColor={backgroundColor}>{title}</Title>
  </Div>
)

export default Card
