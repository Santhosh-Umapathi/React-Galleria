import React from 'react'

//Prop Types
import PropTypes from 'prop-types'

//Logo
import Logo from '../../assets/images/logo.png'

//CSS
import classes from './Toolbar.module.css'

//Navbar Items
import NavigationItems from '../NavigationItems/NavigationItems'

//Side Drawer
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle'


const Toolbar = (props) =>
{
	return (
		<header className={classes.Toolbar}>

			<DrawerToggle clicked={props.clicked}/>

			<div className = {classes.LogoContainer}>
				<img src={Logo} alt="logo" className={classes.Logo} />
				<p>Galleria</p>
			</div>

			<nav className = {classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	)
}

Toolbar.propTypes =
{
	clicked:PropTypes.func
};

export default Toolbar;