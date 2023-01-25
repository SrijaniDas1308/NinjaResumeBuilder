import { TextField } from '@mui/material'
import React from 'react'
import './Input.css'


const Input = (props) => {
  return (
    <>
      <TextField 
      className='inputTF'
      variant='outlined'
      label={props.label} 
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(event) => props.setValue(event.target.value.toString())}
      />

    </>
  )
}

export default Input
