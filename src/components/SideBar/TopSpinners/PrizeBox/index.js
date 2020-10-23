import React from 'react'
import Icon from 'components/Icons'
import {
  Div,
  Header,
  Amount,
  AmountType,
  DateText,
  Date,
  Participants,
  Players,
  PlusIcon,
  Wins,
} from 'components/SideBar/TopSpinners/PrizeBox/styles'

const PrizeBox = () => (
  <Div>
    <Header>
      <Amount>
        5000
        <AmountType>GEL</AmountType>
      </Amount>
      <Date>
        <Icon name='Time' />
        <DateText>
          23.04.19
          {' '}
          20:00
        </DateText>
      </Date>
    </Header>
    <Participants>
      <Icon name='Online' />
      <Players>ნოდარა, ელდარა, ემზარა</Players>
      <PlusIcon>+</PlusIcon>
    </Participants>
    <Wins>1000 X 2</Wins>
  </Div>
)

export default PrizeBox
