import React from 'react'
import styled from 'styled-components'

import { Photos } from './components/photos'

const StyledApp = styled.div`
  height: 100vh;
  position: relative;
`

export const App = () => {
  return (
    <StyledApp>
      <Photos />
    </StyledApp>
  )
}