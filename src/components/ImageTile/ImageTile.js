import React, { useEffect, useState } from 'react'

//Prop Types
import PropTypes from 'prop-types';

//Css
import classes from './ImageTile.module.css'

//Masonry Layout
import Masonry from 'react-masonry-css'

//Components
import Overlay from './Overlay'
import ImageModal from './ImageModal'


const ImageTile = (props) =>
{
	const [showModal, setShowModal] = useState(false)
	const [imageInfo, setImageInfo] = useState(null)
	//Setting Resolution based on Device
	const [ref, setRef] = useState(null)
	const [refAdd, setRefAdd] = useState(0)
	
	let images = null
	const breakpointColumns = {
		default: 4,
		1100: 3,
		700: 2,
		500: 2
	};


	//Setting Image Resolution based on device size
	useEffect(() =>
	{
		if (window.innerWidth <= 500)
		{	//Mobile
			setRef(0)
			setRefAdd(50)
		}
		if ( window.innerWidth > 500 && window.innerWidth <= 850)
		{	//Tablet
			setRef(1)
			setRefAdd(0)
		}
		if (window.innerWidth > 851)
		{	//Desktop
			setRef(2)
			setRefAdd(50)
		}
		//Cleanup
		return () =>
		{
			setRef(null)
			setRefAdd(0)
		}
	}, [ref, refAdd])


	//Setting Images
	if (props.data && ref !== null)
	{
		images = props.data.map(image =>
		{
			const imageWidth = image.imageResolutions[ref] ? image.imageResolutions[ref].width + refAdd  : "500px"
			const imageHeight = image.imageResolutions[ref] ? image.imageResolutions[ref].height + refAdd  : "500px"

			return <div className = {classes.ImageContainer} key = {image.id}>
			<img
				src={image.image.url}
				alt={image.id}
				key={image.id}
				width={imageWidth}
				height={imageHeight}
				className={classes.ImageTile}
				onClick={() =>
				{
					setShowModal(true)
					setImageInfo(image)
				}}
			/>
				{
					window.innerWidth > "320px"
					? <Overlay author={image.author} ups={image.ups} downs={image.downs} id={image.id} />
					: null
				}
	
			</div>
		})
	}

	return (
		<div className = {classes.ImagesContainerRoot}>
			<Masonry
				breakpointCols={breakpointColumns}
				className={classes.MasonryGrid}
				columnClassName={classes.MasonryGrid_column}				
			>
				{images}
			</Masonry>

			{
				showModal
				? <ImageModal
					showModal={showModal}
					clicked={() => setShowModal(false)}
					imageInfo = {imageInfo}
				  />
				: null
			}
		</div>
	)
}

ImageTile.propTypes =
{
	data: PropTypes.array,
	ups: PropTypes.string,
	downs: PropTypes.string,
	id: PropTypes.string,
};

export default ImageTile;