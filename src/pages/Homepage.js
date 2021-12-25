import './pagestyling.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Forestcall from '../sounds/Forestcall.mp3'
import { Player } from '../components/Player'

export const Homepage = () => {

  const [play, setPlay] = useState(false)

  const [audio, setAudio] = useState(new Audio(Forestcall))
  audio.volume = 0.2

  const togglePlay = () => {
    if (play === true) {
      audio.play()
    }
    else {
      audio.pause()
    }
  }

  return (
    <div>

      <div className="header">
        <Player/>
      </div>

      <div className="playarea">
        <div id='box' className="moveablesquare">
        </div>
      </div>
    </div>
  )
}