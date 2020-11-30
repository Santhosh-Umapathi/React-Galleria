import React from 'react'

//React Router
import { NavLink } from 'react-router-dom'

//Prop Types
import PropTypes from 'prop-types';

//Css
import classes from './NavigationItem.module.css'


const NavigationItem = (props) =>
{
	return (
		<li className={classes.NavigationItem}>
			<NavLink exact to = {props.link} activeClassName = {classes.active}>
				{props.children}
			</NavLink>
		</li>
	)
}


NavigationItem.propTypes =
{
	link: PropTypes.string,
	children:PropTypes.any
};

export default NavigationItem;