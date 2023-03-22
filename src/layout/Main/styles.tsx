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
  z-index: -1;
  `

export const AppContainer = styled.div`
  backdrop-filter: blur(5px);
  height: 90vh;
  width: min(95vw, 64rem);
  display: grid;
  gap: 1rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #00000075;
  overflow: hidden;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 5rem repeat(11, 1fr);
  grid-template-areas: 'header header header header header header header header header header header header'
                       'nav content content content content content content content content content content content';

  
`
