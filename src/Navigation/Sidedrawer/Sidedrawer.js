import React from 'react'

//Prop Types
import PropTypes from 'prop-types';

//Logo
import Logo from '../../assets/images/logo.png'

//Css
import classes from './Sidedrawer.module.css'

//SideDrawer Items
import NavigationItems from '../NavigationItems/NavigationItems'

//Components
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


Sidedrawer.propTypes =
{
	show: PropTypes.bool,
	backdropHandler:PropTypes.func
};

export default Sidedrawer