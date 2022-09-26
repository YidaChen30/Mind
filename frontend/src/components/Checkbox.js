import React from "react"
import './components.css'
export const Checkbox = ({value, onChange = false}) => {

  const handleChange = () => {
    onChange = !onChange
  }

  return (
    <>
      <div className="checkboxstyle">
        <input value={value} onChange={handleChange} type='checkbox'/>
      </div>
    </>
  )
}