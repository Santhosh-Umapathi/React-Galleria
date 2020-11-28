import React, { useState, useEffect } from 'react';

//Components
import ImageTile from '../../components/ImageTile/ImageTile';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions'

//Css
import classes from './FavoritesScreen.module.css'


const FavoritesScreen = () =>
{

	const state = useSelector(state => state)

	const greeting = state.favorites.length === 0 ?
		<p>Favorites have heart too ! Make them happy. Go and hit that heart button </p>
		: <p>Hey!! Here's your list of favorites</p>

	return (
		<div className = {classes.Favorites}>
			{greeting}

			<ImageTile data={state.favorites}/>
		</div>
		);
};



export default FavoritesScreen;