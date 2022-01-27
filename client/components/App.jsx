import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Form from './Form'
import List from './List'

const data = [
  { id: 1, product: '', price: 3.59, notes: 'You can eat it or use it as a placeholder in your code' }
]

function App () {
  console.log('App rendered')
  const [list, setList] = useState(data)
  return (
    <main className='app'>
      <header className='title'>
        <Link to={'/'}><h1>Beanbag Game</h1></Link>
      </header>
      <Link to='/create'> 🐢 Your Name:</Link>
      <section className='page'>
        <Routes>
          <Route path='/' element={<List products={list} />} />
          <Route path='/create' element={<Form setList={setList} />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
