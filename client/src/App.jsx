import { useState, useEffect  } from 'react'
import ToServer from './services/ToServer'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Button from './components/Button'

const AfterFilter = ({ personAfterFilter }) => {
	return (
		<div>
			{personAfterFilter}
		</div>
	)
}

const Filter = ({ text, value, handleInputChange }) => {
	const handleChange = (event) => {
		console.log('Filter:', event.target.value)
		handleInputChange(event)
	}
	return (
		<div>
			{text} <input value={value} onChange={handleChange}/>
		</div>
	)
}

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filterName,setFilterName] = useState('')
	const [message, setMessage] = useState('')

	useEffect(() => {
		ToServer
			.getAll()
			.then(initialResult => {
				setPersons(initialResult)
			})
	}, [])

	const addPerson = (event) => {
		event.preventDefault()
		console.log(event)
		const newPerson = {
			name: newName,
			number: newNumber,
		}

		const checkName = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase())
		const changedPerson = { ...checkName, number:newNumber }

		if(checkName && checkName.number === newPerson.number){
			window.alert(`${newName} is already added to phonebook`)
		}
		else if(checkName && checkName.number !== newPerson.number){
			if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){

				ToServer
					.updatePerson(checkName.id, changedPerson)
					.then(returnedPerson => {
						setPersons(persons.map(n => n.id !== checkName.id? n : returnedPerson))
						setNewName('')
						setNewNumber('')
						console.log(`Successfully changed the number of ${newName}`)
						setTimeout(() => {
							setMessage(`number of ${newName} is changed`)
						}, 5000)
					})
					.catch(() => {
						setMessage(`Information of ${newName} has already been removed from server`)
					})
			}
		}
		else{
			ToServer
				.create(newPerson)
				.then(returnedPerson => {
					setPersons(persons.concat(returnedPerson))
					setNewName('')
					setNewNumber('')
					console.log(`Successfully added ${newName}`)
					setMessage(`Added ${newName}`)
					setTimeout(() => {
						setMessage(null)
					}, 5000)
				})
				.catch(error => {
					if (error.response && error.response.data && error.response.data.error) {
						setMessage(`Error: ${error.response.data.error}`)
					} else {
						setMessage('An unknown error occurred')
					}
					console.error('Error:', error)
				})
		}
	}

	const deletePerson = id => {
		const person = persons.find(n => n.id === id)
		if(window.confirm(`Delete ${person.name} ?`))
		{
			ToServer
				.toDeletePerson(id)
			setPersons(persons.filter(persons => persons.id !== id))
		}
		console.log(`${person.name} deleted `)
	}

	const handleNewName = (event) => { setNewName(event.target.value) }

	const handleNewNum = (event) => { setNewNumber(event.target.value) }

	const handleNewFilter = (event) => { setFilterName(event.target.value) }

	const filter = Array.isArray(persons)
		? persons.filter(props => props.name.toLowerCase().includes(filterName.toLowerCase()))
		: []


	const People = ({ name, number, id }) => {
		return(
			<li>{name} {number} <Button text='delete' type="submit" handleInputChange={() =>  deletePerson(id)} /></li>
		)
	}

	const personAfterFilter = filter.map(props =>
		<People key={props.id} name={props.name} number={props.number} id={props.id} />
	)

	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={message} setMessage={setMessage}/>
			<Filter text='filter shown with' value={filterName} handleInputChange={handleNewFilter} />
			<h1>add a new contact</h1>
			<PersonForm onSubmit={addPerson}
				newName={newName}
				newNumber={newNumber}
				handleNewName={handleNewName}
				handleNewNum={handleNewNum}
			/>
			<h1>Numbers</h1>
			<AfterFilter personAfterFilter={personAfterFilter} />
		</div>
	)
}

export default App
