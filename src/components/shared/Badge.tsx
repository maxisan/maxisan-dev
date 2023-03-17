import styled from 'styled-components';

const Badge = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({theme}) => theme.colors.surface}b0;
  color: ${({theme}) => theme.colors.accent};
  text-transform: uppercase;
`

export default Badge