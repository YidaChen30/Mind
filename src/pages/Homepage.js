import './pagestyling.css'
import React from 'react'
import { Player } from '../components/Player'
import { Sandbox} from '../components/Sandbox'

export const Homepage = () => {

  return (
    <div>

      <div className="header">
        Website name
        <Player/>
      </div>
      <Sandbox/>
    </div>
  )
}