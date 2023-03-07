import React from 'react'
import { WithChildren } from 'types/index'
import { MainContainer } from './styles'

const HomeLayout = ({children}:WithChildren) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default HomeLayout