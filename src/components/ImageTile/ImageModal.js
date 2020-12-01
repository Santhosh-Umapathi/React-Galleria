import React from 'react'

//Prop Types
import PropTypes from 'prop-types';

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

ImageModal.propTypes =
{
	showModal: PropTypes.bool,
	clicked: PropTypes.func,
	imageInfo: PropTypes.object,
};
	
export default ImageModal;