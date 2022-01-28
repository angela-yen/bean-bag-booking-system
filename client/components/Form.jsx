import React, { useState } from 'react'

function Form({ setName }) {
  const [form, setForm] = useState('')

  function handleFormChange(event) {
    setForm(event.target.value)
  }

  function handleClick(event) {
    event.preventDefault()

    setName(form)
  }

  return (
    <form>
      <h1> 🐢 Your Name: </h1>
      <input type="text" name="name" value={form.name} onChange={handleFormChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  )
}

export default Form
