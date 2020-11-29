import React, { useEffect, useState, useRef } from 'react'

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
	
	let images = null
	const breakpointColumns = {
		default: 4,
		1100: 3,
		700: 2,
		500: 2
	};

	//Ref for Desktop/Tablet/Mobile
	const ref = useRef(null)
	const refAdd = useRef(0)

	if (props.data)
	{
		images = props.data.map(image =>
		{
			const imageWidth = image.imageResolutions[ref.current] ? image.imageResolutions[ref.current].width + refAdd.current  : "500px"
			const imageHeight = image.imageResolutions[ref.current] ? image.imageResolutions[ref.current].height + refAdd.current  : "500px"

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
				
				<Overlay author={image.author} ups={image.ups} downs={image.downs} id={image.id}/>
				
			</div>
		})
	}

	

	//Setting Image Resolution based on device size
	useEffect(() =>
	{
		if (window.innerWidth <= 500)
		{
			//Mobile
			ref.current = 0
			refAdd.current = 50
		}
		if ( window.innerWidth > 500 && window.innerWidth <= 850)
		{
			//Tablet
			ref.current = 1
			refAdd.current = 0

		}
		if (window.innerWidth > 851)
		{
			//Desktop
			ref.current = 2
			refAdd.current = 50

		}
	}, [])


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

export default ImageTile;