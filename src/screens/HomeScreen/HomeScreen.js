import React, {useState, useEffect} from 'react';

//CSS
import classes from './HomeScreen.module.css'

//Logo Animated
import logo from '../../assets/images/logo-animated.gif';

//Components
import Searchbar from '../../components/Searchbar';
import Trending from '../../components/Trending';
import ImageTile from '../../components/ImageTile';
import Spinner from '../../components/Spinner/Spinner'
//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions'



const HomeScreen = (props) =>
{
	//Redux State
	const isLoading = useSelector(state => state.isLoading)

	const state = useSelector(state => state)
	const dispatch = useDispatch()

	useEffect(() =>
	{
		dispatch(actions.getData("cats", 10))
	}, [])

	return (
		<div className = {classes.RootDiv}>
			<img src={logo} className={classes.Image} alt = "home"/>
			
			<Searchbar />

			<Trending />

			{isLoading ? <Spinner /> : null}

			<ImageTile />

		</div>
		);
};




export default HomeScreen;