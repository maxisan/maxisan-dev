import styled from "styled-components";

export const MainContainer = styled.main`
  grid-area: content;
  display: grid;
  grid-template-areas: 'main main profile'
                       'main main featured';
`