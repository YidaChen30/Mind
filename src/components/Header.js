import '../pages/pagestyling.css'
import React from 'react'
import { Player } from './Player'

export const Header = () => {
  return (
    <div className="header">
      Website name
      <Player/>
    </div>
  )
}