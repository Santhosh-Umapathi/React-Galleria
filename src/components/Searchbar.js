import React, {useEffect, useState} from 'react'
//Css
import classes from './Components.module.css'

//Icons
import icons from '../assets/icons/icons'

// React Icons
import { BsSearch as SearchIcon } from 'react-icons/bs';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/actions'

import Spinner from './Spinner/Spinner'


const Searchbar = (props) =>
{

	const state = useSelector(state => state.data)
	const dispatch = useDispatch()

	const [text, setText] = useState("")

	console.log(state)


	return (
		<div className = {classes.SearchBar}>
			
			<SearchIcon className={classes.Icon} onClick={ () => dispatch(actions.getData("dog", 10))}/>

			<input
				placeholder="Search yours.."
				value={text}
				onChange={e => setText(e.target.value)}
			/>	

			<Spinner />

			
		</div>
	)
}

export default Searchbar;
