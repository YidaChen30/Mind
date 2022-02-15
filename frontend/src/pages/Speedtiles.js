import React from 'react'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Speedtilesgame} from '../components/Speedtilesgame'

export const Speedtiles = () => {

  return (
    <div>
      <Header/>
      <h2 style={{textAlign: "center"}}>Avoid the incoming blocks</h2>
      <Speedtilesgame/>
    </div>
  )
}

