import React from 'react'
//Css
import classes from './Components.module.css'


const ImageTile = (props) =>
{

	return (
		<div className = {classes.ImageTileContainer}>
			<div className = {classes.ImageTile}> 
				Image
			</div>
			<div className = {classes.ImageTile}> 
				Image
			</div>
			<div className={classes.ImageTile}> 
				Image
			</div>
		</div>
	)
}

export default ImageTile;
