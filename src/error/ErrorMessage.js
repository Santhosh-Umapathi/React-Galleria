import React from 'react'

//Css
import classes from './Error.module.css'

const ErrorMessage = (props) =>
{

	return (
		<div className = {classes.ErrorMessage}>
			<p>{props.message}</p>
		</div>
	)
}

export default ErrorMessage