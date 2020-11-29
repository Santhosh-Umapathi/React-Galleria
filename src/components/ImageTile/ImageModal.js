import React from 'react'

//Css
import classes from './ImageTile.module.css'

//Components
import Overlay from './Overlay'
import Backdrop from '../Backdrop/Backdrop'



const ImageModal = (props) =>
{
	const { showModal, clicked, imageInfo } = props
	
	return (
		<>
			<Backdrop show={showModal} clicked={clicked} />
			
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
						id={imageInfo.id}
					/>

				</div>
			</div>
		</>
	)
}
	
export default ImageModal;