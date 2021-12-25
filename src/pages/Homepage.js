import './pagestyling.css'
import { useState, useEffect } from 'react'
import Forestcall from '../sounds/Forestcall.mp3'
import { getEventListeners } from 'events'

export const Homepage = () => {

  const [play, setPlay] = useState(false)
  const [audio, setAudio] = useState(new Audio(Forestcall))
  audio.volume = 0.2

  useEffect(() => {
    console.log(play)
    document.addEventListener('keyup', (event) => {
      toggleSetPlay(event)
      })
  },[])

  useEffect(() => {
    console.log(play)
    togglePlay()
    
  },[play])

  const toggleSetPlay = (e) => {

    if (e.code === 'KeyP') {
      console.log(play)
      if (play === false) {
        setPlay(true)
      }
      else {
        setPlay(false)
      }
    }
  } 

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

      <div className="header">fuck u</div>

      <div className="playarea">
        <div id='box' className="moveablesquare">
        </div>
      </div>
    </div>
  )
}