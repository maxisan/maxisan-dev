import { useTranslations } from 'next-intl'
import React from 'react'
import { WithChildren } from 'types/'
import { Box } from '../shared/Box'
import { AppContainer, Background, MainContent } from './styles'

const MainLayout = ({ children }: WithChildren) => {
  const t = useTranslations('header')
  return (
    <>
      <Background />
      <AppContainer>
        {t('title')}
        <Box col='1 / 2' row='2 / 4'>
        </Box>
        <MainContent>

          {children}
        </MainContent>
      </AppContainer>
    </>
  )
}

export default MainLayout