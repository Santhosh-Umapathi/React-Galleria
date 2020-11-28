import React, { useState } from 'react'

//Css
import classes from './ImageTile.module.css'
//Icons
import icons from '../../assets/icons/icons'
import { FaRegHeart as AddFavoriteIcon } from 'react-icons/fa';
import { FaHeart as RemoveFavoriteIcon } from 'react-icons/fa';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions'

// Wrapper Container for Overlay Components
const OverlayContainer = ({icon, text, favorite, id}) =>
{

	const dispatch = useDispatch()

	const [isSelected, setIsSelected] = useState(false)

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


// Overlay Container for ImageTile
const Overlay = (props) =>
{

	const { author, ups, downs, id } = props
	

	return (
		<div className={classes.Overlay} {...props}>

			<div className = {classes.OverlayDiv}>

				<OverlayContainer icon = {icons.authorIcon} text = {author} />

				<div className = {classes.OverlaySubContainer}>
					
					<OverlayContainer icon = {icons.upsIcon} text = {ups} />

					<OverlayContainer icon = {icons.downsIcon} text = {String(downs)} />

					<OverlayContainer favorite id={id}/>

				</div>

			</div>
		</div>
	)
}

export default Overlay;
