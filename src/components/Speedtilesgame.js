import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import './components.css'
import './tablestyling.css'
import DanielScream from '../sounds/R2DC.mp3'

export const Speedtilesgame = () => {

  const [x, setX] = useState(700);
  const [y, setY] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [blockCoords, setBlockCoords] = useState([]);
  const [daniel, setdaniel] = useState(new Audio(DanielScream))

  /*
  daniel.volume = 0.1;
  window.setTimeout(() => playDaniel(), 5000)

  const playDaniel = () => {
    daniel.play()
    window.setTimeout(() => playDaniel(), 5000)
  }
  */
  const handleMove = useCallback((event) => {
    switch (event.key) {
      case 'ArrowRight':
        if (y < 500) {
          console.log("Move right")  
          setY(y + 100);
        }
        break;
      case 'ArrowUp':
        if (x > 0) {
          setX(x - 100);
          console.log("Move up")
        }
        break;
      case 'ArrowDown':
        if (x < 700) {
          setX(x + 100);
          console.log("Move down")
        }
        break;
      case 'ArrowLeft':
        if (y > 0) {
          setY(y - 100);
          console.log("Move left")
          break;
        }
      default:
        console.log("dafuq")
        break;
    }
  }, [x,y]);

  useEffect(() => {
    document.addEventListener("keydown", handleMove);

    return () => {
      document.removeEventListener("keydown", handleMove);
    };
  }, [handleMove]);

  const generateCoordinates = (number) => {

    setBlockCoords([])
    
    let coordinate = []

    for (let i = 0; i < number; i++) {
      coordinate.push(Math.floor(Math.random() * 6))
    }

    console.log(coordinate)
    setBlockCoords(coordinate)
  }

  const Table = (props) => {
    let table = []
    for (let i = 0; i < 8; i++) {
      let row = []
      for (let j = 0; j < 6; j++) {
        if (y/100 === j && i === 7) {
          row.push(<td key={j} className='cell'>
            <Movingblock/>
            </td>)
        }
        else {
          row.push(<td key={j} className='cell'></td>)
        }
        
      }
      table.push(<tr key={i}>{row}</tr>)
    }
    return (
      <table>
        <tbody>
          {table}
        </tbody>
      </table>
      )
  }

  const SelectDifficulty = () => {
    
    return (
      <div className='difficultyselecttitle'>
        <h3>What difficulty?</h3>
        <p onClick={() => {
          setDifficulty("easy")
          generateCoordinates(6)
        }} className='difficultyselectors'>
          Easy
        </p>
        <p onClick={() => {
          setDifficulty("medium")
        }} className='difficultyselectors'>  
          Medium
        </p>
        <p onClick={() => {
          setDifficulty("hard")
        }} className='difficultyselectors'>
          Hard
        </p>
      </div>
    )
  }

  return (
    <div className="speedtilesarena">
      {difficulty === "" ? 
        <SelectDifficulty/>
        : <Table gameDifficulty={difficulty}/>
      }
    </div>
  )
}



const Movingblock = () => {

  return (
    <div>
      <div style={{width: '100px', height: '100px', backgroundColor: 'green'}}>
      </div>
    </div>
  )
}

