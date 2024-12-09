/* eslint-disable linebreak-style */
import React from 'react'
import Button from './Button'
import InputField from './InputFiled'

const PersonForm = ({ onSubmit, newName, newNumber, handleNewName, handleNewNum }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputField text='enter a name here' value={newName} handleInputChange={handleNewName}/>
      <InputField text='enter a phone number here:' value={newNumber} handleInputChange={handleNewNum}/>
      <Button text='Add' type="submit" />
    </form>
  )
}

export default PersonForm