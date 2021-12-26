import './pagestyling.css'
import React from 'react'
import { Player } from '../components/Player'
import { Sandbox} from '../components/Sandbox'
import { Header } from '../components/Header'
export const Homepage = () => {

  return (
    <div>

      <Header/>
      <Sandbox/>
    </div>
  )
}