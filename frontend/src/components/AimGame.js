import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import './components.css'
import './tablestyling.css'
import hitding from '../sounds/Hitsound.wav'

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

  const [displayMinute, setDisplayMinute] = useState("00");
  const [displaySecond, setDisplaySecond] = useState("00");

  //wrap interval in useeffect so that it only creates one instead of an interval everytime the page rerenders.
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currSecond = second + 1;

      if (currSecond > 59) {
        setSecond(0)
        setDisplaySecond("00")
        setMinute((minute) => minute + 1)
        console.log(minute + 1)
        if (minute < 9) {
          setDisplayMinute("0" + (minute + 1).toString())
        }
        else {
          setDisplayMinute(minute + 1)
        }

      }
      else {
        setSecond(currSecond)

        if (currSecond <= 9) {
          setDisplaySecond("0" + currSecond)
        }
        else {
          setDisplaySecond(currSecond)
        }

      }
    }, 10)

    return () => {
      clearInterval(timerInterval)
    }
  })

  
  return(
    <h2 style={{textAlign: 'center'}}>
      {displayMinute} : {displaySecond}
    </h2>
  )
}

const AimArea = () => {

  const [hitsound, setHitsound] = useState(new Audio(hitding))
  const [targetCoordinate, setTargetCoordinate] = useState([49,45])

  hitsound.volume = 0.2
  const generateTarget = () => {
    let newCoordinate = [Math.floor(Math.random() * 85), Math.floor(Math.random() * 85)]

    setTargetCoordinate(newCoordinate)
  }

  return (

      <div style={{marginLeft: targetCoordinate[0] + 'vw', marginTop: targetCoordinate[1] + 'vh'}} className='target' onClick={() => {
        generateTarget()
        hitsound.play()
      }}>
        <div style={{height: '100%', borderLeft: '1px solid black', marginLeft:'50%'}}>
        </div>
        <div style={{width:'100%', borderTop:'1px solid black', marginTop: '-50%'}}>
        </div>
      </div>

  )
}
