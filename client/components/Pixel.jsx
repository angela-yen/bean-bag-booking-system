import React, { useState } from 'react'

function Pixel () {
  const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  const [paint, setStyle] = useState('#ff6347')

  function clickHandler () {
    setStyle(randomHexColor())
  }
  function handleMouseEnter () {
    setStyle('#66CDAA')
  }
  function doubleClickHandler () {
    setStyle('#ffffff')
  }

  return (

    <div onClick= {clickHandler} onMouseEnter={handleMouseEnter} onDoubleClick={doubleClickHandler} style ={{ height: 50, width: 50, backgroundColor: paint }}>

    </div>

  )
}

export default Pixel
