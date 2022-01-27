import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    <div>
      {/* <Form /> */}
      <div className='grid'>
        {Array.from({ length: 30 }, (_, i) => [
          <Pixel key={i} name='' />
        ])}
      </div>
      <span> <button onClick={Pixel}>Click to re-arrange</button></span>
    </div>
  )
}

export default App
