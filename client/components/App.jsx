import React, { useState } from 'react'
import Pixel from './Pixel'

function App() {
  console.log('App rendered')
  const [name, setName] = useState('')
  return (
    <>
      <div>

        <h1 className='apple'>Beanbag Booking System 👀</h1>
        <div className='grid'>
          {Array.from({ length: 30 }, (_, i) => [
            <Pixel key={i} name={name} />
          ])}
        </div>
      </div>

    </>
  )
}

export default App
