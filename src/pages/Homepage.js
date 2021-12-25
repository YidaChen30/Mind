import './pagestyling.css'
import React from 'react'
import { Player } from '../components/Player'

export const Homepage = () => {

  return (
    <div>

      <div className="header">
        <Player/>
      </div>

      <div className="playarea">
        <div id='box' className="moveablesquare">
        </div>
      </div>
    </div>
  )
}