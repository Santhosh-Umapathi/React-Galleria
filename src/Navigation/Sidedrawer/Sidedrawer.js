import React from 'react'
import Logo from '../../assets/images/logo.png'
import NavigationItems from '../NavigationItems/NavigationItems'

//Css
import classes from './Sidedrawer.css'

//Backdrop
import Backdrop from '../../components/Backdrop/Backdrop'

const Sidedrawer = (props) =>
{
	
	let attachedClasses = [classes.Sidedrawer, classes.Close]

	if (props.show)
	{
		attachedClasses = [classes.Sidedrawer, classes.Open]
		}
	
	return (
		<>
			<Backdrop show={props.show} clicked={props.backdropHandler}/>

			<div className = {attachedClasses.join(' ')} onClick = {props.backdropHandler}>
				<div className = {classes.Logo}>
						<img src = {Logo} alt = "logo" />
				</div>

				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>

	)
}

export default Sidedrawer