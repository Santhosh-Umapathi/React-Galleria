import React from 'react'
//Logo
import Logo from '../../assets/images/logo.png'

//SideDrawer Items
import NavigationItems from '../NavigationItems/NavigationItems'

//Css
import classes from './Sidedrawer.module.css'

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
				<div className = {classes.LogoContainer}>
					<img src={Logo} alt="logo" className={classes.Logo}/>
				</div>

				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>
	)
}

export default Sidedrawer