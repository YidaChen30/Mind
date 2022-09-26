import React from 'react'
import { useState } from 'react'
import './components.css'
import Forestcall from '../sounds/Forestcall.mp3'
import { Box } from '@mui/material'
import { Stack } from '@mui/system'

export const Player = () => {

  const [play, setPlay] = useState(false)
  const [audio, setAudio] = useState(new Audio(Forestcall))
  audio.volume = 0.2

  // reset the audio play button after the song has ended
  audio.onended = function() {
    setPlay(!play)
  }
  
  const togglePlay = () => {

    setPlay(!play)

    if (play) {
      audio.pause()
    }
    else {
      audio.play()
    }
  }

  return (
    <Stack spacing={1} justifyContent={'center'}>
      <div onClick={() => {togglePlay()}} className="playbutton">
        {play ? <div className="pause"/> : <div className="playtriangle"/>}
      </div>
      <Box sx={{
        height: '3px',
        backgroundColor: 'gray',
        width: '100px',
        borderRadius: '1px'
      }}>
        <Box sx={{
          width: ((audio.currentTime / audio.duration) * 100) + '%',
          backgroundColor: 'orange',
          height: '100%'
        }}>

        </Box>
      </Box>
    </Stack>
  )
}