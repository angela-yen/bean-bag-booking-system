import React, { useState } from 'react'
import Pixel from './Pixel'


const bagColor = ['#0000ff', '#ffb6c1', '#87ceeb', '#ffff00', '#8b0000', '#ff0000', '#8b0000', '#8b0000', '#0000ff', '#0000ff']

function generateBagColor(bagColor) {
  return bagColor[Math.floor(Math.random() * bagColor.length)]
}


function App() {
  console.log('App rendered')
  const [name, setName] = useState('')
  return (
    <>
      <div>

        <h1 className='apple'>Beanbag Booking System 👀</h1>
        <div className='grid'>
          {Array.from({ length: 30 }, (_, i) => [
            <Pixel key={i} name={name} color={generateBagColor(bagColor)}/>
          ])}
        </div>
      </div>

    </>
  )
}

export default App
