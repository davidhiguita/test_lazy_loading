import React from 'react'
import { Spinner } from './spinner'

const Image = React.lazy(() => import('./image'))

export const Photo = (props) => (
  <React.Suspense fallback={<Spinner />}>
    <Image {...props} alt="" />
  </React.Suspense>
)

export default Photo
