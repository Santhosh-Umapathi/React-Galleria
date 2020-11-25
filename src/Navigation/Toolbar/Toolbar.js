import React from 'react'
import Logo from '../../assets/images/logo.png'
import classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle'



const Toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>

			<DrawerToggle clicked={props.clicked}/>


			<div className = {classes.Logo}>
			<img src = {Logo} alt = "logo" />

			</div>
			<nav className = {classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
		
	)
}

export default Toolbar