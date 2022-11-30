import React from 'react'
import { useState, useEffect, useCallback, memo, useMemo, useRef } from 'react'
import './components.css'
import './tablestyling.css'
import hitding from '../sounds/Hitsound.wav'
import { Stack , Button, Box, Typography } from '@mui/material'

export const AimGame = () => {

  const UseTimer = (props) => {

    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0)
  
    const [displayMinute, setDisplayMinute] = useState("00");
    const [displaySecond, setDisplaySecond] = useState("00");

    //wrap interval in useeffect so that it only creates one instead of an interval everytime the page rerenders.
    useEffect(() => {
      //console.log('render')
        //console.log(second)
        const timerInterval = setInterval(() => {
          const currSecond = second + 1;

          /*if (minute * 60 + second >= props.duration) {
            setPageState('result')
          }*/

          if (currSecond > 59) {
            setSecond(0)
            setDisplaySecond("00")
            setMinute((minute) => minute + 1)

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
        }, 1000)
    
        //console.log(timerInterval)
        return () => {
          clearInterval(timerInterval)
        }
      }
    )
    return (
      <h2 style={{textAlign: 'center'}}>
        {displayMinute} : {displaySecond}
      </h2>
    )
  }

  const MemoTimer = memo(() => <UseTimer/>)

  const AimArea = () => {

    const [pageState, setPageState] = useState('start')
    const [duration, setDuration] = useState(0)
    const [hitsound, setHitsound] = useState(new Audio(hitding))
    const [targetCoordinate, setTargetCoordinate] = useState([49,45])
    const [score, setScore] = useState(0)
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    hitsound.volume = 0.2
    const generateTarget = () => {
      let newCoordinate = [Math.floor(Math.random() * 85), Math.floor(Math.random() * 85)]
      setTargetCoordinate(newCoordinate)
    }
    //console.log(time)
    useEffect(() => {
      let interval;
      //console.log(time)
      //console.log(duration)
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);

    useEffect(() => {
      if (time > duration && pageState === 'game') {
        setRunning(false)
        setPageState('result')
      }
    }, [time])
    

    return (
      pageState === 'start' ?
        <Stack justifyContent={'center'} sx={{ height: '50vh'}}>
          <Typography textAlign={'center'}>Pick a time limit and play</Typography>
          <Stack justifyContent={'center'} spacing={1} direction={'row'}>
            <Button onClick={() => {
              setDuration(30)
              setPageState('game')
              setRunning(true)
            }}>
              30 seconds
            </Button>
            <Button onClick={() => {
              setDuration(60)
              setPageState('game')
              setRunning(true)
            }}>
              1 minute
            </Button>
            <Button onClick={() => {
              setDuration(90)
              setPageState('game')
              setRunning(true)
            }}>
              1 minute 30 seconds
            </Button>
          </Stack>
        </Stack>
      :

      pageState === 'result' ?

        <Stack justifyContent={'center'} sx={{height: '50vh'}}>
          <Typography textAlign={'center'}>
            Your score is: {score}
          </Typography>
          <Typography textAlign={'center'}>
            Play Again
          </Typography>
          <Stack justifyContent={'center'} direction={'row'}>
            <Button onClick={() => {
                setDuration(30)
                setPageState('game')
                setRunning(true)
                setScore(0)
                setTime(0)
              }}>
                30 seconds
              </Button>
              <Button onClick={() => {
                setDuration(60)
                setPageState('game')
                setRunning(true)
                setScore(0)
                setTime(0)
              }}>
                1 minute
              </Button>
              <Button onClick={() => {
                setDuration(90)
                setPageState('game')
                setRunning(true)
                setScore(0)
                setTime(0)
              }}>
                1 minute 30 seconds
              </Button>
          </Stack>
        </Stack>
      :
      <Stack>
        <MemoTimer/>
        <div style={{marginLeft: targetCoordinate[0] + 'vw', marginTop: targetCoordinate[1] + 'vh'}} className='target' 
        onClick={() => {
          generateTarget()
          hitsound.play()
          setScore(() => score + 1)
        }}>
          <div style={{height: '100%', borderLeft: '1px solid black', marginLeft:'50%'}}>
          </div>
          <div style={{width:'100%', borderTop:'1px solid black', marginTop: '-50%'}}>
          </div>
        </div>
      </Stack>
    )
  }

  return (
    <div style={{ width:'100%', height:'95vh', overflow:'auto'}}>
      <AimArea/>
    </div>
  )
}
