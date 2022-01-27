import React, { useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route} from 'react-router-dom'
import React from 'react'
// import Pixel from './Pixel'
import Form from './Form'

const data = [
  {name: Sadie}
]

function App () {
  const [list, setList] = useState(data)
  return (
<>
<Routes>
    <Route path ='/' element ={<Form setList = {setList} />} /> 
</Routes> 
</>   

  )
}

export default App
