import Badge from 'components/shared/Badge'
import styled from 'styled-components'

export const MainContainer = styled.div<{image:string}>`
  background-image: url(${({image}) => image});
  background-position: center;
  background-size: cover;
  position: relative;
  grid-column: 2 / 4;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`

export const CategoryBadge = styled(Badge)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`