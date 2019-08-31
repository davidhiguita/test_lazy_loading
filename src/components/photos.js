import React from 'react'
import styled from 'styled-components'
import { usePhotos } from '../hooks/usePhotos'
import { Photo } from './photo'

const PhotosList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 154px);
`

export const Photos = () => {
  const photos = usePhotos()

  return (
    <PhotosList>
      {
        photos.map(({ id, thumbnailUrl }) =>
          <Photo key={id} src={thumbnailUrl} />
        )
      }
    </PhotosList>
  )
}
