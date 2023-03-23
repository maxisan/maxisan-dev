import { FaChevronRight } from 'react-icons/fa'
import { WithChildren } from "types/index"
import { MainContainer, SeeMore, Title } from "./styles"

interface Props extends WithChildren {
  title: string
}

const ProjectDesciption = ({title, children}: Props) => {
  return (
    <MainContainer>
      <Title>{title}</Title>
      {children}
      <SeeMore>Ver más <FaChevronRight /></SeeMore>
    </MainContainer>
  )
}

export default ProjectDesciption