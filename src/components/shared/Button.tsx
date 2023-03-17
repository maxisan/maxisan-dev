import styled from "styled-components";

const Button = styled.button`
  background-color: ${({theme}) => theme.colors.accent};
  border: none;
  padding: 1rem;
  height: fit-content;
  border-radius: 0.5rem;
  font-weight: 700;
  
`

export default Button