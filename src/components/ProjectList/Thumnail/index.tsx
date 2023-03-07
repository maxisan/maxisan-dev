import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  title: string;
  image: string;
  onClick: () => void
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  height: 4rem;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
`

const ImageContainer = styled.div`
  height: 3rem;
  width: 3rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`

const Thumbnail = ({title, image, onClick}: Props) => {
  return (
    <MainContainer onClick={onClick}>
      <ImageContainer>
        <Image src={image} alt="" fill style={{objectFit: 'cover'}}/>
      </ImageContainer>
      <p>{title}</p>
    </MainContainer>
  )
}

export default Thumbnail