import React, { useEffect, useState } from 'react'

//Prop Types
import PropTypes from 'prop-types';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions'

//Css
import classes from './ImageTile.module.css'

//Icons
import { FaRegHeart as AddFavoriteIcon } from 'react-icons/fa';
import { FaHeart as RemoveFavoriteIcon } from 'react-icons/fa';
import { AiOutlineLike as UpsIcon } from 'react-icons/ai';
import { AiOutlineDislike as DownsIcon } from 'react-icons/ai';
import { FaUserSecret as AuthorIcon } from 'react-icons/fa';



// Wrapper Container for Overlay Components
const OverlayContainer = ({icon, text, favorite, id}) =>
{
	//Favorites Icon
	const [isSelected, setIsSelected] = useState(false)

	//Redux State & Actions
	const favorites = useSelector(state => state.favorites)
	const dispatch = useDispatch()


	//Persist Favorites Icon on Json data
	useEffect(() =>
	{
		favorites.map(image =>
		{
			if (image.id === id)
			{
				setIsSelected(true)
			}
		})
	}, [favorites])

	//Setting Favorites Icon
	let favoriteIcon = <AddFavoriteIcon
		className={classes.AddFavoriteIcon}
		onClick={() =>
		{
			setIsSelected(true)
			dispatch(actions.addFavorite(id))
		}}
	/>
	
	if (isSelected)
	{
		favoriteIcon = <RemoveFavoriteIcon
			className={classes.RemoveFavoriteIcon}
			onClick={() => {
				setIsSelected(false)
				dispatch(actions.deleteFavorite(id))
			}}
		/>
	}

	return (
		<div className={classes.OverlayContainer}>

			{favorite ? favoriteIcon : null}

			{icon}

			{text ? <p> {text} </p> : null}

		</div>
	)
}

OverlayContainer.propTypes =
{
	icon: PropTypes.any,
	text: PropTypes.string,
	favorite: PropTypes.bool,
	id: PropTypes.string,
};


// Overlay Container for ImageTile
const Overlay = (props) =>
{
	const { author, ups, downs, id } = props
	

	return (
		<div className={classes.Overlay} {...props}>

			<div className = {classes.OverlayDiv}>

				<OverlayContainer icon={<AuthorIcon className={classes.OtherIcons}/>} text = {author} />

				<div className = {classes.OverlaySubContainer}>
					
					<OverlayContainer icon = {<UpsIcon className={classes.OtherIcons}/>} text = {ups} />

					<OverlayContainer icon = {<DownsIcon className={classes.OtherIcons}/>} text = {String(downs)} />

					<OverlayContainer favorite id={id}/>

				</div>

			</div>
		</div>
	)
}

Overlay.propTypes =
{
	author: PropTypes.string,
	ups: PropTypes.string,
	downs: PropTypes.string,
	id: PropTypes.string,
};

export default Overlay;
