import React, { useState } from 'react'

const bagColor = ['#0000ff', '#ffb6c1', '#87ceeb', '#ffff00', '#8b0000', '#ff0000', '#8b0000', '#8b0000', '#0000ff', '#0000ff']

function generateBagColor(bagColor) {
  return bagColor[Math.floor(Math.random() * bagColor.length)]
}

export default function Pixel(props) {
  const [style, setStyle] = useState({ backgroundColor: generateBagColor(bagColor), height: '100px', width: '100px' })

  const [name, setName] = useState('')

  function handleClick() {
    console.log('clicked')
    setName(props.name)
  }

  return (
    // making the div clickable
    <div style={style} onClick={handleClick}>
      {name}
    </div>
  )
}
