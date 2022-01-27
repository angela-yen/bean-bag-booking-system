import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form ({ setList }) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: ''
  })

  function handleFormChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleClick (event) {
    event.preventDefault()

    const updatedForm = {
      ...form,
      id: parseInt(form.id),
      price: Number(form.price)
    }
    setList(currentList => [...currentList, updatedForm])

    navigate('/')
  }

  return (
    <form>
      <input type="text" name="product" value={form.name} onChange={handleFormChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  )
}

export default Form
