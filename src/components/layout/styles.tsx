import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/assets/assassins.webp');
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(16px);
  z-index: -1;
`

export const AppContainer = styled.div`
  height: 90vh;
  width: 95vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 3rem 1fr 1fr;
  gap: 1rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #00000075;
  overflow: hidden;
`

export const MainContent = styled.main`
  grid-column: 2 / 13;
  grid-row: 2 / 4;
`

// 041319 Box color