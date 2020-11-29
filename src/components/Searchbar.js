import React, {useEffect, useState} from 'react'
//Css
import classes from './Components.module.css'


// React Icons
import { BsSearch as SearchIcon } from 'react-icons/bs';
import { AiOutlineClear as ClearIcon } from 'react-icons/ai';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/actions'


const Searchbar = (props) =>
{
	const [text, setText] = useState("")

	//Redux State & Actions
	const state = useSelector(state => state)
	const dispatch = useDispatch()



	const searchImages = (event) =>
	{
		setText(event.target.value)
		dispatchActionHandler(event.target.value)
	}

	const clearImages = () =>
	{
		setText("")
		dispatch(actions.setTrendingKeyword(null))
	}

	const dispatchActionHandler = (text) =>
	{
		dispatch(actions.getData(text, 10)) //Get only first 10 images
		dispatch(actions.setTrendingKeyword(text))
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

			{
				text !== ""
				? <ClearIcon className={classes.Icon} onClick={clearImages}/>
				: null
			}
			
		</div>
	)
}

export default Searchbar;
