import React from 'react'
import { WithChildren } from 'types/index'
import styled from "styled-components";

const MainContainer = styled.main`
  grid-area: content;
  display: grid;
  gap: 1rem;
  grid-template-areas: 'main main profile'
                       'main main featured';
`
const HomeLayout = ({children}:WithChildren) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default HomeLayout