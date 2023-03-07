import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template: repeat(2,1fr) / 1fr 1.5fr 1.5fr;
  padding: 2rem;
  gap: 1rem;
`

export const Title = styled.h2`
  font-size: 1.2rem;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1 / 3;
`
