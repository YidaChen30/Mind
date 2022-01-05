import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import './components.css'
import './tablestyling.css'

export const Speedtilesgame = () => {

  const [x, setX] = useState(700);
  const [y, setY] = useState(0);

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

  const Table = () => {
    let table = []

    for (let i = 0; i < 8; i++) {
      let row = []
      for (let j = 0; j < 6; j++) {
        if (y/100 === j && i === 7) {
          row.push(<td className='cell'><Movingblock/></td>)
        }
        else {
          row.push(<td className='cell'></td>)
        }
        
      }
      table.push(<tr>{row}</tr>)
    }
    return (table)
  }

  return (
    <div className="speedtilesarena">
      <Table/>
      
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

/*
const Movingblock = (props) => {
  console.log("x is " + props.x)
  console.log("y is " + props.y)

  return (
    <div>
      <div style={{width: '100px', height: '100px', backgroundColor: 'green',
      marginTop: props.x + 'px', marginLeft: props.y + 'px'}}>
        
      </div>
    </div>
  )
}
*/
