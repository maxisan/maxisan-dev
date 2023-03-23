import TechBadge from '@shared/TechBadge'
import { useTranslations } from 'next-intl'
import { ITech } from 'types/index'
import { PROJECT_LIST_CATEGORY, TECHS_TITLE } from '../lang'
import { MainContainer, TechsContainer, Title } from './styles'

interface Props {
  techs: ITech[]
}



const Techs = ({techs}: Props) => {
  const t = useTranslations(PROJECT_LIST_CATEGORY)
  return (
    <MainContainer>
      <Title>{t(TECHS_TITLE)}</Title>
      <TechsContainer>
        {techs.slice(0,6).map((tech) => <TechBadge key={tech.id} {...tech} />)}
      </TechsContainer>
    </MainContainer>
  )
}

export default Techs