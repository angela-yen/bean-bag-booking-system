import React, { useState, Link } from 'react'
import Form from './Form'
import Pixel from './Pixel'

function App() {
  console.log('App rendered')
  const [name, setName] = useState('')
  return (
    <>
      <div>
        {/* <Form setName={setName} /> */}
        <h1 className='apple'>Beanbag Booking System 👀</h1>
        <div className='grid'>
          {Array.from({ length: 30 }, (_, i) => [
            <Pixel key={i} name={name} />
          ])}
        </div>

        {/* <button onClick={Pixel}><h1>Click to re-arrange</h1></button> */}
      </div>
      {/*
      <main className='app'>
        <header className='title'>
          <Link to={'/'}><h1>Beanbag Game</h1></Link>
        </header>
      </main> */}
    </>
  )
}

export default App
