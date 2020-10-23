import React, { useState } from 'react'
import Header from 'components/Section/Header'
import Table from 'components/Section/Tables'
import Modal from 'components/Modal'
import GameStarted from 'components/Section/GameStarted'
import Footer from 'components/Section/Footer'

const Section = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleRegister = () => setModalOpen(!modalOpen)
  return (
    <div>
      <Modal isOpen={modalOpen} handleModalClick={handleRegister}>
        <GameStarted />
      </Modal>
      <Header />
      <Table handleRegister={handleRegister} />
      <Footer />
    </div>
  )
}

export default Section
