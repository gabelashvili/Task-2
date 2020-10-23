import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Icon from 'components/Icons'

const Modal = styled.div`
    margin:0 auto;
    display:table;
    position: absolute;
    left: 0;
    right:0;
    top: 50%; 
    -webkit-transform:translateY(-50%);
    -moz-transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    -o-transform:translateY(-50%);
    transform:translateY(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.7);
    z-index: 10;
`

const Children = styled.div`
    position: relative;
    background: #352D4B;
    width: ${({ width }) => (width || '50.9375rem')};
    height:${({ height }) => (height || 'min-content')} ;
`

const Close = styled.div`
    position: absolute;
    width: min-content;
    top: 0.9375rem;
    right: 1.5625rem;
    & > svg {
        width: 1.1875rem;
        height: 1.1875rem;
    }
`

const ModalComponent = ({
  width, height, isOpen, children, handleModalClick,
}) => {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(!open)
    handleModalClick()
  }

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <>
      {open ? (
        <Modal id='modal'>
          <Children width={width} height={height}>
            <Close onClick={handleClose}>
              <Icon name='Close' />
            </Close>
            {children}
          </Children>
        </Modal>
      ) : null}
    </>
  )
}

export default ModalComponent
