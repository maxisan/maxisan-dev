import { WithChildren } from 'types/index';
import { AppContainer, Background } from './styles';

interface Props extends WithChildren {
  className: string;
}

const MainLayout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Background />
      <AppContainer className={className}>
        {children}
      </AppContainer>
    </>
  )
}

export default MainLayout