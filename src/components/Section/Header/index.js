import React from 'react'
import {
  Header,
  Tabs,
  Tab,
  ActiveBorder,
  Online,
  OnlinePlayer,
} from 'components/Section/Header/styles'
import Icon from 'components/Icons'

const HeaderComponent = () => (
  <Header>
    <Tabs>
      <Tab isActive>
        ALL GAMES
        <ActiveBorder />
      </Tab>
      <Tab>ONLY 3 PLAYER</Tab>
      <Tab>ONLY 5 PLAYER</Tab>
    </Tabs>
    <Online>
      <Icon name='Online' />
      <OnlinePlayer>Online Players: 4364</OnlinePlayer>
    </Online>
  </Header>
)

export default HeaderComponent
