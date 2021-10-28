//css 
import styled, { keyframes } from 'styled-components'

export const RightLeft = keyframes`
 from{
    transform: scale(0);
    opacity:0;
     }
 to{
    transform: scale(1);
    opacity: 1;
     }
`
export const ModalWrapper = styled.div`
  animation: ${RightLeft} 0.5s;
  backdrop-filter: blur(10px);
  background: rgba(202, 202, 202, 0.58);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1000;
`
const getWidth = (size) => {
  switch (size) {
    case 'sm':
      return '370px'
    default:
      return '370px'
  }
}
export const Container = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 32px;
  border: 2px solid #7C00B3;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  min-height: 400px;
  padding: 30px 50px;
  width: ${({ size }) => getWidth(size)};
  z-index: 2000;

`
export const Close = styled.div`
  align-items: center;
  cursor: pointer;
  justify-content: center;
  position: absolute;
  right: -46px;
  top: -46px;
  background-color: lightgrey;
  display: none;
`
export const FormDialogContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  img {
    height: 80px;
    width: 79.99px;
  }
`
export const Message = styled.span`
  color: ${({ theme }) => theme.colors.secondary.base};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: bold;
  line-height: 29px;
  margin-top: 30px;
  text-align: center;
`

export const Modal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`