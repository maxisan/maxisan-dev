import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { ListContainer, MainContainer, Title } from './styles'
import projects from 'data/projects.json'
import Thumbnail from './Thumnail'
import Image from 'next/image'
import SelectedProject from './SelectedProject'

const ProjectList = () => {
  const t = useTranslations('projectList')
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <MainContainer>
      <ListContainer>
        <Title>{t('title')}</Title>
        {projects.map(project => <Thumbnail 
          key={project.id}
          title={project.title}
          image={project.thumbnail}
          onClick={() => setSelectedProject(project)}
        />)}
      </ListContainer>
      <SelectedProject image={selectedProject.featuredImage} techs={selectedProject.techs}/>
      
    </MainContainer>
  )
}

export default ProjectList