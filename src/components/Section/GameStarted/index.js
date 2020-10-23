import React from 'react'
import Card from 'components/Section/Tables/TableBox/Card'
import Icon from 'components/Icons'
import {
  Div,
  LeftSide,
  RighSide,
  Time,
  Title,
  Detail,
  FooterText,
  Box,
  Desc,
  PrizeImg,
  Prize,
  PrizeBox,
  PrizeDetail,
  Type,
  Text,
  Place,
  PlacePrize,
  StartButton,
} from 'components/Section/GameStarted/styles'

const ModalData = () => (
  <Div>
    <LeftSide>
      <Title>თამაში დაიწყო</Title>
      <Detail>
        {new Array(4).fill().map(() => (
          <Box>
            <Desc>ხანგრძლივობა</Desc>
            <Time>2 საათი</Time>
          </Box>
        ))}
      </Detail>
      <FooterText>
        თუ რამე ტექსტი იქნება აგერ ააატექსტის
        <br />
        ადგილი
      </FooterText>
    </LeftSide>
    <RighSide>
      <Card title='JAMING JARS' backgroundColor='#352D4B'>
        <PrizeImg src='https://i.imgur.com/h5Y5Mys.png' alt='' />
      </Card>
      <PrizeDetail>
        <Prize>
          5000
          <Type>GEL</Type>
        </Prize>
        {new Array(3).fill().map(() => (
          <PrizeBox>
            <Place>
              <Icon name='Online' />
              {' '}
              <Text>1 ადგილი</Text>
            </Place>
            <PlacePrize>2000 GEL</PlacePrize>
          </PrizeBox>
        ))}
      </PrizeDetail>
      <StartButton>დაწყება</StartButton>
    </RighSide>
  </Div>
)

export default ModalData
