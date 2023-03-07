import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  image: string;
  techs: string[];
}

const MainContainer = styled.div`
  position: relative;
  grid-column: 2 / 4;
  border-radius: 1rem;
  overflow: hidden;
`

const TechsContainer = styled.div`
  height: 4rem;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%);
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
`

const SelectedProject = ({image, techs}: Props) => {
  return (
    <MainContainer>
      <Image src={image} fill alt='' style={{objectFit: 'cover'}}/>
      <TechsContainer>
        {techs.map((tech, i) => <p key={i}>{tech}</p>)}
      </TechsContainer>
    </MainContainer>
  )
}

export default SelectedProject