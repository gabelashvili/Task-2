import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import {
  Div,
  Type,
  BorderBottom,
  Line,
  Dot,
  Text,
  Prize,
  PrizeAmountCurrenct,
  PrizeAmount,
  PrizeAmountDesc,
  RegisteredPlayer,
  Value,
  RegisteredButton,
  WaitOponents,
  Waiting,
  WaitingText,
  LinearActivity,
  Indeterminate,
  Cards,
  Coefficient,
  PrizeImg,
} from 'components/Section/Tables/TableBox/styles'
import Icon from 'components/Icons'
import Card from 'components/Section/Tables/TableBox/Card'

const TableBox = ({
  selectedTableId,
  data,
  handleClick,
  tableIndex,
  handleRegister,
}) => {
  const isRegisteredClicked = selectedTableId === data?.id
  const [count, setCount] = useState(1)
  const intervalRef = useRef(null)
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c - 1)
    }, 1000)
  }, [count])
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return
    }
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }, [count])

  useEffect(() => {
    if (count > 0 && isRegisteredClicked) {
      start()
    }
    return () => stop()
  }, [count, isRegisteredClicked])

  const handleRegisterClick = () => {
    if (count === 0) {
      handleRegister()
    } else {
      handleClick(data, tableIndex)
      setCount(30)
    }
  }

  const isStarting = count === 0

  const renderButtonText = () => {
    if (isRegisteredClicked && !isStarting) {
      return 'გაუქმება'
    }
    if (isRegisteredClicked && isStarting) {
      return 'დაწყება'
    }
    return 'რეგისტრაცია'
  }

  return (
    <Div
      isRegisteredClicked={isRegisteredClicked}
      isStarting={isStarting && isRegisteredClicked}
    >
      <Type>
        <Text isRegisteredClicked={isRegisteredClicked}>
          {data.maxParticipants}
          {' '}
          კაციანი
        </Text>
        <BorderBottom>
          <Line />
          <Dot />
        </BorderBottom>
      </Type>
      <Prize
        isRegisteredClicked={isRegisteredClicked}
      >
        <PrizeAmount>
          {data.prize}
          <PrizeAmountCurrenct>GEL</PrizeAmountCurrenct>
        </PrizeAmount>
        <PrizeAmountDesc>
          მაქს. მოგება
        </PrizeAmountDesc>
      </Prize>
      {isRegisteredClicked && !isStarting && (
      <WaitOponents>გთხოვთ დაელოდოთ მოწინააღდმეგეს</WaitOponents>
      )}
      <RegisteredPlayer
        isRegisteredClicked={isRegisteredClicked}
        isStarting={count === 0}
      >
        {new Array(data.maxParticipants).fill().map((player, index) => (
          <Icon
            name={index > 1 ? 'Offline' : 'Online'}
          />
        ))}
      </RegisteredPlayer>
      {isRegisteredClicked && !isStarting && (
        <Waiting>
          <WaitingText>
            სავარაუდო მოლოდინის დრო:
            {' '}
            {count}
            {' '}
            წამი
          </WaitingText>
          <LinearActivity>
            <Indeterminate />
          </LinearActivity>
        </Waiting>
      )}
      {isRegisteredClicked && isStarting && (
        <Cards>
          <Card title='კოეფიციენტი'>
            <Coefficient>5X</Coefficient>
          </Card>
          <Card title='JAMING JARS'>
            <PrizeImg src='https://i.imgur.com/h5Y5Mys.png' alt='' />
          </Card>
        </Cards>
      )}
      <Value
        isRegisteredClicked={isRegisteredClicked}
        isStarting={isStarting}
      >
        5 ლარი
      </Value>
      <RegisteredButton
        isRegisteredClicked={isRegisteredClicked}
        onClick={handleRegisterClick}
      >
        {renderButtonText()}
      </RegisteredButton>
    </Div>
  )
}
export default TableBox
