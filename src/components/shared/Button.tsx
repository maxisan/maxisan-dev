import styled from "styled-components";

const Button = styled.button<{variant?: 'primary' | 'secondary'}>`
  background-color: ${({theme, variant}) => variant === 'primary' ? theme.colors.accent : theme.colors.surface};
  color: ${({theme, variant}) => variant === 'primary' ? theme.colors.surface : 'white'};
  border: ${({theme, variant}) => variant === 'primary' ? 'none' : theme.colors.accent + ' solid 2px'};
  padding: 0.7rem 1rem ;
  height: fit-content;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`

export default Button