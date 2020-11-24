import React from 'react'
//Css
import classes from './Components.module.css'

//Icons
import icons from '../assets/icons/icons'

// React Icons
import { BsSearch as SearchIcon } from 'react-icons/bs';


const Searchbar = (props) =>
{



	return (
		<div className = {classes.SearchBar}>
			
			<SearchIcon className={classes.Icon} onClick={ () =>console.log("search")}/>

			<input placeholder = "Search yours.." />	

			
		</div>
	)
}

export default Searchbar;
