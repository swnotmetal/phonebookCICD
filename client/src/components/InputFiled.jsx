/* eslint-disable linebreak-style */
const InputField = ({ text, label, value, handleInputChange }) => {

  const handleChange = (event) => {
    console.log('InputField:', event.target.value)
    handleInputChange(event)
  }
  return (
    <div>
      {label} <input value={value} onChange={handleChange} placeholder={text} />
    </div>
  )
}

export default InputField