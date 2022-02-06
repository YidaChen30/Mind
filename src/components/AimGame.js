import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import './components.css'
import './tablestyling.css'
import DanielScream from '../sounds/R2DC.mp3'

export const AimGame = () => {

  return (
    <div style={{ width:'100%', height:'95vh', overflow:'auto'}}>
      <Timer/>
      <AimArea/>
    </div>
  )
}

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currSecond = second + 1;

      if (currSecond > 60) {
        setSecond(0)
        setMinute((minute) => minute + 1)
      }
      else {
          setSecond(currSecond)
      }
      
      console.log(second)
  
    }, 1000)

    return () => {
      clearInterval(timerInterval)
    }
  })

  
  return(
    <div>
      {minute} : {second}
    </div>
  )
}

const AimArea = () => {

  const [targetCoordinate, setTargetCoordinate] = useState([48,45])

  const generateTarget = () => {
    let newCoordinate = [Math.floor(Math.random() * 90), Math.floor(Math.random() * 90)]

    setTargetCoordinate(newCoordinate)
  }

  return (

      <div style={{marginLeft: targetCoordinate[0] + 'vw', marginTop: targetCoordinate[1] + 'vh'}} className='target' onClick={() => {
        generateTarget()
      }}>
        <div style={{height: '100%', borderLeft: '1px solid black', marginLeft:'50%'}}>
        </div>
        <div style={{width:'100%', borderTop:'1px solid black', marginTop: '-50%'}}>
        </div>
      </div>

  )
}