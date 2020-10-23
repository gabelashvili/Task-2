import React, { useState } from 'react'
import Icon from 'components/Icons'
import {
  Div,
  HistoryWrapper,
  History,
  Logo,
  Player,
  Balance,
  Wrapper,
  Text,
  Value,
  ModalTitle,
  ModalWrapper,
} from 'components/SideBar/Balance/styles'
import Modal from 'components/Modal'
import Table from 'components/SideBar/Balance/Table'

const BalanceComponent = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalClick = () => {
    setModalOpen(() => !modalOpen)
  }
  return (
    <Div>
      <Modal
        isOpen={modalOpen}
        width='60.25rem'
        handleModalClick={handleModalClick}
      >
        <ModalWrapper>
          <ModalTitle>ისტორია</ModalTitle>
          <Table />
        </ModalWrapper>
      </Modal>
      <HistoryWrapper>
        <History onClick={handleModalClick}>
          <Icon name='Settings' />
          ისტორია
        </History>
      </HistoryWrapper>
      <Logo>
        <Icon name='Logo' />
      </Logo>
      <Player>Muscul Bones</Player>
      <Balance backgroundColor='#217C8B'>
        <Wrapper>
          <Icon name='Money' />
          <Text>ბალანსი</Text>
        </Wrapper>
        <Value>995.65 GEL</Value>
      </Balance>
      <Balance backgroundColor='#6E717E'>
        <Wrapper>
          <Icon name='Spins' />
          <Text>უფასო სპინები</Text>
        </Wrapper>
        <Value>99 GEL</Value>
      </Balance>
    </Div>
  )
}

export default BalanceComponent
