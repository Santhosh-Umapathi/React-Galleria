import React,{useState, useEffect} from 'react'
//Css
import classes from './ImageTile.module.css'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions/actions'

//Components
import Spinner from '../Spinner/Spinner'
import Overlay from './Overlay'
import Backdrop from '../Backdrop/Backdrop'

//Masonry Layout
import Masonry from 'react-masonry-css'


const ImageModal = (props) =>
{
	const { showModal, clicked, imageInfo } = props
	
	console.log(imageInfo)

	return (
		<Backdrop show={showModal} clicked={clicked}>
			<div className={classes.ImageModalContainer}>
				<div className={classes.ImageModalSubContainer}>
					<p>{imageInfo.title}</p>
					<img
						src={imageInfo.image.url}
						alt={imageInfo.id}
						key={imageInfo.id}
						width="500px"
						height= "500px"
						className = {classes.ImageTile}
					/>

					<Overlay
						author={imageInfo.author}
						ups={imageInfo.ups}
						downs={imageInfo.downs}
						className=""
					/>

				</div>


				

				
			</div>

		</Backdrop>
	)
}
	




const ImageTile = (props) =>
{

	//Redux State & Actions
	const state = useSelector(state => state)
	const dispatch = useDispatch()

	const [showModal, setShowModal] = useState(false)
	const [imageInfo, setImageInfo] = useState(null)

	let images = <Spinner />

	

	if (state.data)
	{
		images = state.data.map(image =>
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
