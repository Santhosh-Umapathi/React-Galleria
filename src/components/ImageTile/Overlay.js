import React from 'react'

//Css
import classes from './ImageTile.module.css'
//Icons
import icons from '../../assets/icons/icons'


// Wrapper Container for Overlay Components
const OverlayContainer = ({icon, text}) =>
{

	return (
		<div className={classes.OverlayContainer}>
			{icon}

			{text ? <p> {text} </p> : null}
		</div>
	)
}


// Overlay Container for ImageTile
const Overlay = (props) =>
{

	const { author, ups, downs } = props
	

	return (
		<div className={classes.Overlay} {...props}>

			<div className = {classes.OverlayDiv}>

				<OverlayContainer icon = {icons.authorIcon} text = {author} />

				<div className = {classes.OverlaySubContainer}>
					
					<OverlayContainer icon = {icons.upsIcon} text = {ups} />

					<OverlayContainer icon = {icons.downsIcon} text = {String(downs)} />

					<OverlayContainer icon = {icons.addFavoriteIcon} />

				</div>

			</div>
		</div>
	)
}

export default Overlay;
