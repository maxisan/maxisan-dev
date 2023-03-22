import { Box } from 'components/shared/Box'
import styled from 'styled-components'

export const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  gap: 0.5rem;
`

export const PictureContainer = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  overflow: hidden;
`

export const NameContainer = styled.div`
  text-align: center;
  & h4 {
    text-transform: uppercase;
    font-weight: 700;
  }
  & p {
    font-size: 0.8rem;
  }
`

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem;
  text-align: center;
  font-size: 0.9rem;

  .data {
    font-size: 1rem;
    color: ${({theme}) => theme.colors.accent.base};
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 0.3rem;
  }
`