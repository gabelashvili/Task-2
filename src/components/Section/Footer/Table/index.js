import React from 'react'
import Icon from 'components/Icons'
import {
  Table,
  TableBody,
  TableHead,
  Tr,
  Th,
  Td,
  IconWrapper,
  TimeWrapper,
  Coefficient,
  PlayerName,
  Wins,
} from 'components/Section/Footer/Table/styles'

const TableComponent = () => (
  <Table>
    <TableHead>
      <Tr>
        <Th />
        <Th>ნომერი</Th>
        <Th>დრო</Th>
        <Th>კოეფიცინეტი</Th>
        <Th>მომხმარებელი</Th>
        <Th>მოგებული თანხა</Th>
      </Tr>
    </TableHead>
    <TableBody>
      {new Array(3).fill().map(() => (
        <Tr>
          <Td>
            <IconWrapper>
              <Icon name='Time' />
            </IconWrapper>
          </Td>
          <Td># 4412452</Td>
          <Td>
            <TimeWrapper>
              <Icon name='Time' />
              12:33
            </TimeWrapper>
          </Td>
          <Td>
            <Coefficient>
              2.37
            </Coefficient>
          </Td>
          <Td>
            <PlayerName>
              <Icon name='Online' />
              Nodari
            </PlayerName>
          </Td>
          <Td>
            <Wins>
              33.55₾
            </Wins>
          </Td>
        </Tr>
      ))}
    </TableBody>
  </Table>
)

export default TableComponent
