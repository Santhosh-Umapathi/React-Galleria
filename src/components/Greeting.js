import React from 'react'

//Css
import classes from './Components.module.css'

//Redux
import { useSelector } from 'react-redux'

const Greeting = () =>
{

	const userEmail = useSelector(state => state.userEmail)

	let name = "Nicola"

	if (userEmail === "serena.baggio@galleria.com")
	{
		name = "Serena"
	}
	

	return (
		<div className = {classes.Greeting}>
			<p>Hey <i>{name}</i>! , What would you like to search today?</p>
		</div>
	)
}

export default Greeting;