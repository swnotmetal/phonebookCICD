const InputField = ({ label, value, handleInputChange }) => {
    
	const handleChange = (event) => {
		console.log('InputField:', event.target.value)
		handleInputChange(event)
	}
	return (
		<div>
			{label} <input value={value} onChange={handleChange} />
		</div>
	)
}

export default InputField