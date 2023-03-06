import { useTranslations } from 'next-intl'
import React from 'react'
import { WithChildren } from 'types/'
import { Box } from '../../shared/Box'
import Header from '../../Header'
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