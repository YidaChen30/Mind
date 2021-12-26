import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import './components.css'

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

  return (
    <div className="speedtilesarena">
      <Movingblock x={x} y={y}/>
    </div>
  )
}

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
