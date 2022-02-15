import '../pages/pagestyling.css'
import React from 'react'
import { Player } from './Player'
import chen from '../pics/chen.png'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

  const history = useNavigate();

  return (
    <div className="header">
      <img src={chen} onClick={() => {
        history("/")
      }} style={{cursor: "pointer", border: "1px solid black"}}/>
      <Player/>
    </div>
  )
}