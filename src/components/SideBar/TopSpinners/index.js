import React from 'react'
import {
  Div,
  TitleBar,
  Title,
  Dot,
  BorderBottom,
  Line,
} from 'components/SideBar/TopSpinners/styles'
import PrizeBox from 'components/SideBar/TopSpinners/PrizeBox'

const SpinnersComponent = () => (
  <Div>
    <TitleBar>
      <Title>ტოპ სპინები</Title>
      <BorderBottom>
        <Line />
        <Dot />
      </BorderBottom>
    </TitleBar>
    {new Array(7).fill().map(() => <PrizeBox />)}
  </Div>
)

export default SpinnersComponent
