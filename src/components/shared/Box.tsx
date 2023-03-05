import styled from 'styled-components';
import { WithChildren } from 'types';

interface Props extends WithChildren {
  col?: string;
  row?: string;
}

export const Box = styled.div<Props>`
  background-color: #07151a;
  grid-column: ${({col}) => col || 'auto'};
  grid-row: ${({row}) => row || 'auto'};
  width: 100%;
  border-radius: 1.5rem;
`