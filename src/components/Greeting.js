import React from 'react'

//Redux
import { useSelector } from 'react-redux'

//Css
import classes from './Components.module.css'


const Greeting = () =>
{
	//Redux State
	const userEmail = useSelector(state => state.userEmail)

	let name = "Nicola"

	if (userEmail === "serena.baggio@galleria.com")
	{
		name = "Serena"
	}
	/* Simulated Error Boundary */
	// const randNum = Math.random()
	// if (randNum > 0.7)
	// {
	// 	throw new Error("Something went wrong")
	// }
	// else
	// {
		return (
		<div className = {classes.Greeting}>
			<p>Hey <i data-testid ="Greeting">{name}</i>! What would you like to search today?</p>
		</div>
		)
	// }
}

export default Greeting;