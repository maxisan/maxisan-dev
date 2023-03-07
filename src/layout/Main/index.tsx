import React from 'react'
import { WithChildren } from 'types/index'
import { AppContainer, Background } from './styles'

const MainLayout = ({ children }: WithChildren) => {
  return (
    <>
      <Background />
      <AppContainer>
        {children}
      </AppContainer>
    </>
  )
}

export default MainLayout