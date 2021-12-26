import React from 'react'
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Speedtilesgame} from '../components/Speedtilesgame'

export const Speedtiles = () => {

  return (
    <div>
      <Header/>
      <h3 style={{textAlign: "center"}}>Avoid the incoming blocks</h3>
      <Speedtilesgame/>
    </div>
  )
}

