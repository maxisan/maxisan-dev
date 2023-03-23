import TechBadge from "components/shared/TechBadge"
import mainStack from 'data/techs.json'
import { useTranslations } from "next-intl"
import { TECH_STACK_CATEGORY, TITLE } from "./lang"
import { BadgeContainer, MainContainer, Title } from "./styles"

const TechStack = () => {
  const t = useTranslations(TECH_STACK_CATEGORY)
  return (
    <MainContainer>
      <Title>{t(TITLE)}</Title>
      <BadgeContainer>
        {mainStack.map((tech) => <TechBadge key={tech.id} {...tech} featured />)}
      </BadgeContainer>
    </MainContainer>
  )
}

export default TechStack