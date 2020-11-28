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


const Searchbar = (props) =>
{
	//Redux State & Actions
	const state = useSelector(state => state)
	const dispatch = useDispatch()

	const [text, setText] = useState("")


	const searchImages = (event) =>
	{
		setText(event.target.value)
		dispatchActionHandler(event.target.value)
	}

	const dispatchActionHandler = (text) =>
	{
		dispatch(actions.getData(text, 30)) //Get only first 30 images
	}

	useEffect(() =>
	{
		//Set trending keyword on searchbar
		if (state.trendingKeyword)
		setText(state.trendingKeyword)
		
		//Cleanup trending keyword
		return () =>
		{	
			if(state.trendingKeyword)
			dispatch(actions.setTrendingKeyword(null))
		}
	}, [state.trendingKeyword])






	return (
		<div className = {classes.SearchBar}>
			
			<SearchIcon className={classes.Icon} onClick={() => dispatchActionHandler(text)} />
			
			<input
				placeholder="Search yours.."
				value={text}
				onChange={searchImages}
			/>	
			
		</div>
	)
}

export default Searchbar;
