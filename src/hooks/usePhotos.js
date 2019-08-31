import { useEffect, useState } from 'react'

export const usePhotos = () => {
  const [photos, setPhotos] = useState([])

  useEffect(function() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then((photos) => {
        setPhotos(photos.slice(0, 200))
      })
  }, [])

  return photos
}