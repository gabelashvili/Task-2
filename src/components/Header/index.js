import React from 'react'
import {
  Header,
  Logo,
  Jackpot,
  JackpotBox,
  JeckpotDesc,
  BoxWrapper,
  Dot,
  Cashier,
  Setting,
  LeftSide,
  RightSide,
} from 'components/Header/styles'
import Icon from 'components/Icons'

const HeaderComponent = () => (
  <Header>
    <LeftSide>
      <Logo>
        <Icon name='Logo' />
      </Logo>
      <Jackpot>
        <BoxWrapper>
          <JackpotBox isStandart>1</JackpotBox>
          <JackpotBox isStandart>2</JackpotBox>
          <JackpotBox isStandart>4</JackpotBox>
          <JackpotBox isStandart>2</JackpotBox>
          <JackpotBox isStandart>3</JackpotBox>
          <Dot />
          <JackpotBox>8</JackpotBox>
          <JackpotBox>9</JackpotBox>
        </BoxWrapper>
        <JeckpotDesc>LEADER JACKPOT</JeckpotDesc>
      </Jackpot>
      <Jackpot>
        <BoxWrapper>
          <JackpotBox isStandart>1</JackpotBox>
          <JackpotBox isStandart>2</JackpotBox>
          <JackpotBox isStandart>4</JackpotBox>
          <JackpotBox isStandart>2</JackpotBox>
          <JackpotBox isStandart>3</JackpotBox>
          <Dot />
          <JackpotBox>8</JackpotBox>
          <JackpotBox>9</JackpotBox>
        </BoxWrapper>
        <JeckpotDesc>LEADER JACKPOT</JeckpotDesc>
      </Jackpot>
    </LeftSide>
    <RightSide>
      <Cashier>
        <Icon name='Cashier' />
        Cashier
      </Cashier>
      <Setting>
        <Icon name='Settings' />
        <Icon name='Settings' />
        <Icon name='Settings' />
        <Icon name='Settings' />
      </Setting>
    </RightSide>
  </Header>
)

export default HeaderComponent
