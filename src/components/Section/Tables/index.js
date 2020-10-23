import React, { useState } from 'react'
import TableBox from 'components/Section/Tables/TableBox'
import { Div } from 'components/Section/Tables/styles'

const maxNum = [3, 5]

const tableList = [
  {
    id: 1,
    isClicked: false,
    prize: parseInt(11 * Math.floor(Math.random() * 100) + 1, 10),
    maxParticipants: maxNum[Math.floor(Math.random() * 0) + 1],
  },
  {
    id: 2,
    isClicked: false,
    prize: parseInt(11 * Math.floor(Math.random() * 100) + 1, 10),
    maxParticipants: maxNum[Math.floor(Math.random() * 0) + 1],
  },
  {
    id: 3,
    isClicked: false,
    prize: parseInt(11 * Math.floor(Math.random() * 100) + 1, 10),
    maxParticipants: maxNum[Math.floor(Math.random() * 0) + 1],
  },
  {
    id: 4,
    isClicked: false,
    prize: parseInt(11 * Math.floor(Math.random() * 100) + 1, 10),
    maxParticipants: maxNum[Math.floor(Math.random() * 0) + 1],
  },
  {
    id: 5,
    isClicked: false,
    prize: parseInt(11 * Math.floor(Math.random() * 100) + 1, 10),
    maxParticipants: maxNum[Math.floor(Math.random() * 0) + 1],
  },
  {
    id: 6,
    isClicked: false,
    prize: parseInt(11 * Math.floor(Math.random() * 100) + 1, 10),
    maxParticipants: maxNum[Math.floor(Math.random() * 0) + 1],
  },
  {
    id: 7,
    isClicked: false,
    prize: parseInt(11 * Math.floor(Math.random() * 100) + 1, 10),
    maxParticipants: maxNum[Math.floor(Math.random() * 0) + 1],
  },
  {
    id: 8,
    isClicked: false,
    prize: parseInt(11 * Math.floor(Math.random() * 100) + 1, 10),
    maxParticipants: maxNum[Math.floor(Math.random() * 0) + 1],
  },
]

const Table = ({ handleRegister }) => {
  const [selectedTable, setSelectedTable] = useState()
  const handleSubmit = (data, tableIndex) => {
    if (data.id === selectedTable?.id) {
      setSelectedTable(null)
    } else {
      setSelectedTable({
        ...data,
        tableIndex,
      })
    }
  }
  const isInteger = parseInt(tableList.length / 4, 10) === tableList.length / 4
  return (
    <Div
      selectedTableIndex={selectedTable?.tableIndex}
      isLastTableOfColumn={(selectedTable?.tableIndex + 1) % 4 === 0}
    >
      {tableList.map((table, index) => (
        <TableBox
          selectedTableId={selectedTable?.id}
          data={table}
          isInteger={isInteger}
          handleClick={handleSubmit}
          tableIndex={index}
          handleRegister={handleRegister}
        />
      ))}
    </Div>
  )
}

export default Table
