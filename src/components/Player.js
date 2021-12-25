import React from 'react'
import { useState } from 'react'
import './components.css'

export const Player = () => {

  const [play, setPlay] = useState(false)

  return (
    <div className="playbutton">
      <div className="playtriangle"/>
    </div>
  )
}