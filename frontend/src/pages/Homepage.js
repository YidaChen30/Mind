import './pagestyling.css'
import React from 'react'
import { Header } from '../components/Header'

export const Homepage = () => {

  return (
    <div>
      <Header/>
      <div className='pagediv'>
        <h1 style={{marginTop:'-10px'}}>anyonghaseyo</h1>
      </div>
    </div>
  )
}