import React from 'react'
import Header from 'components/Header'
import styled from 'styled-components'
import Section from 'components/Section'
import Balance from 'components/SideBar/Balance'
import TopSpinners from 'components/SideBar/TopSpinners'

const Div = styled.div`
  width: 82.448%;
  min-height: 100vh;
  margin: auto;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 21.125rem;
  grid-column-gap: 0.75rem;
`

const SideBar = styled.aside``

function App() {
  return (
    <Div>
      <Header />
      <Wrapper>
        <Section />
        <SideBar>
          <Balance />
          <TopSpinners />
        </SideBar>
      </Wrapper>
    </Div>
  )
}

export default App
