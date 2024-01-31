import React from 'react'
import Button from './Button'
import InputField from './InputFiled'

const PersonForm = ({ onSubmit, newName, newNumber, handleNewName, handleNewNum }) => {
	return (
		<form onSubmit={onSubmit}>
			<InputField text='name:' value={newName} handleInputChange={handleNewName}/>
			<InputField text='number:' value={newNumber} handleInputChange={handleNewNum}/>
			<Button text='add' type="submit" />
		</form>
	)
}

export default PersonForm