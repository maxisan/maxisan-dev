import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  title: string;
  image: string;
  onClick: () => void;
  selected: boolean;
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  height: 4rem;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
`

const ImageContainer = styled.div<{selected: boolean}>`
  height: 3rem;
  width: 3rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  ${({selected, theme}) => selected && 'border: 2px solid ' + theme.colors.accent.base + ';'}
`

const Thumbnail = ({title, image, onClick, selected}: Props) => {
  return (
    <MainContainer onClick={onClick}>
      <ImageContainer selected={selected}>
        <Image src={image} alt="" fill style={{objectFit: 'cover'}}/>
      </ImageContainer>
      <p>{title}</p>
    </MainContainer>
  )
}

export default Thumbnail