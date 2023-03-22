import projects from 'data/projects.json'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import ProjectDesciption from './ProjectDescription'
import SelectedProject from './SelectedProject'
import { DescriptionContainer, ListContainer, MainContainer } from './styles'
import Techs from './Techs'
import Thumbnail from './Thumnail'

const ProjectList = () => {
  const t = useTranslations('projectList')
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <MainContainer>
      <ListContainer>
        <h2>{t('title')}</h2>
        {projects.map(project => <Thumbnail 
          key={project.id}
          title={project.title}
          image={project.thumbnail}
          onClick={() => setSelectedProject(project)}
          selected={selectedProject.id === project.id}
        />)}
      </ListContainer>
      <SelectedProject
        image={selectedProject.featuredImage}
        stack={selectedProject.stack}
      >
        <DescriptionContainer>
          <ProjectDesciption title={selectedProject.title}>{selectedProject.shortDescription}</ProjectDesciption>
          <Techs techs={selectedProject.techs} />
        </DescriptionContainer>
      </SelectedProject>
      
    </MainContainer>
  )
}

export default ProjectList