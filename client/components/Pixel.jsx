import React, { useState } from 'react'

export default function Pixel(props) {
  const style = {
    backgroundColor: props.color,
    height: '300px',
    width: '300px',
    borderRadius: '125px',
    border: '2px',
    padding: '20px',
    margin: '20px'
  }

  const [name, setName] = useState('')

  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle(!toggle)
  }

  function handleFormChange(event) {
    console.log(event.target.value)
    setName(event.target.value)
  }

  return (
    // making the div clickable
    <div style={style} onDoubleClick={handleClick}>
      {(toggle)
        ? <>
          <h1 className='magic'> 🐢 Your Name: </h1>
          <input type="text" name="name" value={name} onChange={handleFormChange} />
          <button onClick={handleClick}>Submit</button>
        </>
        : <h1 className='tree'>{name}</h1>
      }
    </div>
  )
}
