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
  const [newCoordinates, setNewCoords] = useState([])
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


  useEffect(() => {
    setTimeout(() => {
      incrementBlocks(6)
    }, 3000)
  }, [blockCoords, newCoordinates])

  const generateCoordinates = (number) => {

    setBlockCoords([])
    
    let coordinate = []

    for (let i = 0; i < number; i++) {
      coordinate.push(Math.floor(Math.random() * 6))
    }

    console.log(coordinate)
    setBlockCoords(coordinate)
  }

  const incrementBlocks = (number) => {
    
    let updatedCoordinates = []

    console.log(newCoordinates[0])
    // if blocks have not been spawned in yet then do that
    if (newCoordinates.length === 0) {
      console.log(typeof(newCoordinates[0]))
      for (let i = 0; i < number; i++) {
        let yCoordinate = 0;
        for (let j = 0; j < i; j++) {
          if (blockCoords[j] === blockCoords[i]) {
            yCoordinate--;
          }
          
        }
        updatedCoordinates.push([blockCoords[i],yCoordinate])
      }
    }
    else {
      for (let i = 0; i < newCoordinates.length; i++) {
        updatedCoordinates[i] = [i, newCoordinates[i][1] + 1];
      }
    }

    setNewCoords(updatedCoordinates)
    console.log(updatedCoordinates)
  }

  const Table = () => {
    let table = []
    let currCoords = []
    let m = 0;
    for (let a = 0; a < newCoordinates.length; a++) {
      console.log(newCoordinates[a])
      if (newCoordinates[a][1] >= 0) {
        currCoords.push(newCoordinates[a])
      }
    }

    for (let i = 0; i < 8; i++) {
      let row = []
      for (let j = 0; j < 6; j++) {
        if (i === 7) {
          if (y/100 === j ) {
            row.push(<td key={j} className='cell'>
            <Movingblock/>
            </td>)
          }
          else {
            row.push(<td key={j} className='cell'></td>)
          }
         
        }
        else {
          let blockflag = false
          m++
          console.log(m)
          for (let x = 0; x < currCoords.length; x++) {
            console.log(currCoords[x][1]);
            if (currCoords[x][1] > -1 && currCoords[x][0] === j && currCoords[x][1] === i) {
              row.push(<td key={j} className='blockcell'></td>)
              blockflag = true;
              currCoords.splice(x,1)
            }
          }
          
          if (blockflag === false) {
            row.push(<td key={j} className='cell'></td>)
          }
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
        : <Table/>
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

