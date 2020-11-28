import React,{useState, useEffect} from 'react'
//Css
import classes from './ImageTile.module.css'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions/actions'

//Components
import Spinner from '../Spinner/Spinner'
import Overlay from './Overlay'

//Masonry Layout
import Masonry from 'react-masonry-css'






const ImageTile = (props) =>
{

	//Redux State & Actions
	const state = useSelector(state => state)
	const dispatch = useDispatch()

	let images = <Spinner />

	

	if (state.data)
	{
		images = state.data.map(image =>
		{
			return <div className = {classes.ImageContainer}>
				
			<img
				src={image.image.url}
				alt={image.id}
				key={image.id}
				width={image.imageResolutions[2].width + 100}
				height={image.imageResolutions[2].height + 100}
				className = {classes.ImageTile}
			/>
				
				<Overlay author={image.author} ups={image.ups} downs={image.downs}/>
				

			</div>
			
		})
	}

	console.log(state.data)


	const breakpointColumns = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1
	};




	return (
		<div className = {classes.ImagesContainerRoot}>
			<Masonry
				breakpointCols={breakpointColumns}
				className={classes.MasonryGrid}
				columnClassName={classes.MasonryGrid_column}				
			>
				{images}
			</Masonry>
		</div>

	)
}

export default ImageTile;
