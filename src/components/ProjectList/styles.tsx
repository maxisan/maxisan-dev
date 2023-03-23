import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 1.5rem;
  gap: 1rem;
  height: 100%;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const DescriptionContainer = styled.div`
  min-height: 30%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1rem;
  padding-top: 2rem;
  background: rgb(0,19,15, 0.8);
  background: ${({theme}) => `linear-gradient(0deg, ${theme.colors.background.base}f0, ${theme.colors.background.base}c0, ${theme.colors.background.base}90, transparent)`};
  gap: 0.5rem;
`