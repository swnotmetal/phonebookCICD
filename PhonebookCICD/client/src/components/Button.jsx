const Button = ({type, text, handleInputChange}) => {
	return(
		<button type={type} onClick={handleInputChange} >{text}</button>
	)
}

export default Button