import React from 'react';

//Redux
import { useSelector } from 'react-redux';

//Css
import classes from './FavoritesScreen.module.css'

//Components
import ImageTile from '../../components/ImageTile/ImageTile';


const FavoritesScreen = () =>
{
	//Redux State
	const state = useSelector(state => state)

	let name = "Nicola"

	if (state.userEmail === "serena.baggio@galleria.com")
	{
		name = "Serena"
	}

	const greeting = state.favorites.length === 0
		? <p>Favorites have heart too ! Make them happy. Go and hit that heart button </p>
		: <p>Hey <i>{name}</i>!! Here's your list of favorites</p>

	return (
		<div className = {classes.Favorites}>
			{greeting}

			<ImageTile data={state.favorites}/>
		</div>
	);
};


export default FavoritesScreen;