import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const Spinner = styled.div`
  height: 154px;
  position: relative;
  width: 154px;

  &:after {
    animation: ${rotate} 2s linear infinite;
    border: solid 2px #09F;
    content: '';
    border-right-color: transparent;
    border-radius: 50%;
    height: 30px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    width: 30px;
  }
`