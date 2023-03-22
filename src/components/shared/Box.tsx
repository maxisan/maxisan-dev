import { WithChildren } from 'src/types';
import styled from 'styled-components';

interface Props extends WithChildren {
  col?: string;
  row?: string;
  area?: string;
}

export const Box = styled.section<Props>`
  background-color: ${({theme}) => theme.colors.surface};
  grid-column: ${({col}) => col || 'auto'};
  grid-row: ${({row}) => row || 'auto'};
  width: 100%;
  border-radius: 1.5rem;
  grid-area: ${({area}) => area};
`