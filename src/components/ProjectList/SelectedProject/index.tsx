import { WithChildren } from 'types/index';
import { CategoryBadge, MainContainer } from './styles';

interface Props extends WithChildren{
  image: string;
  stack: string;
}

const SelectedProject = ({image, stack, children}: Props) => {
  return (
    <MainContainer image={image}>
      <CategoryBadge>{stack}</CategoryBadge>
      {children}
    </MainContainer>
  )
}

export default SelectedProject