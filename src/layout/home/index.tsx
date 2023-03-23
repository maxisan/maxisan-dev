import styled from "styled-components";
import { WithChildren } from 'types/index';

const MainContainer = styled.main`
  grid-area: content;
  display: grid;
  gap: 1rem;
  grid-template: 'main main profile' auto
                 'main main featured' 1fr / 1fr 1fr 0.8fr;
`
const HomeLayout = ({children}:WithChildren) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default HomeLayout