import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    Array.from({ length: 100 }, () => [
      <Pixel />,
      <Pixel />,
      <Pixel />,
      <Pixel />,
      <Pixel />
    ])
  )
}

export default App
