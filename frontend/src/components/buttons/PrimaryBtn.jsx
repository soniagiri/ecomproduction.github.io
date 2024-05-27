import React from 'react'
import "./primarybtn.css";
const PrimaryBtn = ({ children="Primary Button" ,...props}) => {
  return (
    <button className='primary_btn' {...props}>{children}</button>
  )
}

export default PrimaryBtn