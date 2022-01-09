import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import './components.css'

export const Sandbox = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMove = useCallback((event) => {
    
    switch (event.key) {
      case 'ArrowRight':
        if (y < 900) {
          console.log("Move right")  
          setY(y + 5);
        }
        break;
      case 'ArrowUp':
        if (x > 0) {
          setX(x - 5);
          console.log("Move up")
        }
        
        break;
      case 'ArrowDown':
        if (x < 700) {
          setX(x + 5);
          console.log("Move down")
        }
        break;
      case 'ArrowLeft':
        if (y > 0) {
          setY(y - 5);
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

  return (
    <div>
      <h3 style={{textAlign: "center"}}>Move the block</h3>

      <div className='playbox'>
        <Movingblock x={x} y={y}/>
      </div>
    </div>
  )
}


const Movingblock = (props) => {
  console.log("x is " + props.x)
  console.log("y is " + props.y)
  return (
    <div style={{width: '100px', height: '100px', backgroundColor: 'green',
    marginTop: props.x + 'px', marginLeft: props.y + 'px'}}/>
  ) 
}