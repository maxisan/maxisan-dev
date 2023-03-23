import { Box } from 'components/shared/Box'
import styled from 'styled-components'

export const MainContainer = styled(Box)`
  grid-area: featured;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  `

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.accent.base};
  text-transform: uppercase;
  `

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`