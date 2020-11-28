import React, {useState} from 'react'
//Css
import classes from './ImageTile.module.css'

//Components
import Spinner from '../Spinner/Spinner'
import Overlay from './Overlay'
import ImageModal from './ImageModal'

//Masonry Layout
import Masonry from 'react-masonry-css'


const ImageTile = (props) =>
{

	const [showModal, setShowModal] = useState(false)
	const [imageInfo, setImageInfo] = useState(null)

	let images = <Spinner />

	

	if (props.data)
	{
		images = props.data.map(image =>
		{
			return <div className = {classes.ImageContainer} key = {image.id}>
			<img
				src={image.image.url}
				alt={image.id}
				key={image.id}
				width={image.imageResolutions[2].width + 100}
				height={image.imageResolutions[2].height + 100}
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