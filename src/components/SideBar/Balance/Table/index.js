import React from 'react'
import Icon from 'components/Icons'
import {
  Table,
  Tr,
  Th,
  Td,
  Players,
} from 'components/SideBar/Balance/Table/styles'

const TableComponent = () => (
  <Table>
    <Tr>
      <Th>თარიღი</Th>
      <Th>ღირებული</Th>
      <Th>რა xი</Th>
      <Th>რაოდენობა</Th>
      <Th style={{ width: '25%', textAlign: 'left' }}>მონაწილეები</Th>
      <Th>ადგილი</Th>
      <Th>მოგებული</Th>
    </Tr>
    {new Array(5).fill().map(() => (
      <Tr>
        <Td>23 იან.</Td>
        <Td>2 ლარი</Td>
        <Td>100X</Td>
        <Td>5 კაციანი</Td>
        <Td style={{ width: '25%', textAlign: 'left' }}>
          <Players>
            <Icon name='Online' />
            ნოდარა, ელდარა, ემზარა, ზურა, გიორგი
          </Players>
        </Td>
        <Td>10</Td>
        <Td>5000 ლარი</Td>
      </Tr>
    ))}
  </Table>
)

export default TableComponent
