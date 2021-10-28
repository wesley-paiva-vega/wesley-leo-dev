import React, { useState, useEffect } from 'react'
import * as S from './style'

export const Modal = ({ open, onClose, children, size }) => {

  const [show, setShow] = useState(false)

  const handleCloseClick = () => {
    setShow(false);
    onClose();
  }

  useEffect(() => {
    if (open !== show) setShow(open)
  }, [open])
  return (
    <>
      {show && (
        <S.Modal>
            <S.ModalWrapper onClick={handleCloseClick} >
            </S.ModalWrapper>
            <S.Container size={size}>
                <S.Close>
                </S.Close>
                {children}
            </S.Container>
        </S.Modal>
      )}
    </>
  )
}