import React from 'react'

//Nav Bar Component
import NavigationItem from './NavigationItem/NavigationItem'

//Css
import classes from './NavigationItems.module.css'


const NavigationItems = () =>
{

	return (
		<ul className = {classes.NavigationItems}>
			<NavigationItem link="/" active>Home</NavigationItem>
			<NavigationItem link="/favorites" active>Favorites</NavigationItem>
			<NavigationItem link="/logout" active>Logout</NavigationItem>
		</ul>
	)
}

export default NavigationItems;