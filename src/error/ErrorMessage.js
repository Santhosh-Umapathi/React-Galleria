import React from 'react'

//Prop Types
import PropTypes from 'prop-types';

//Css
import classes from './Error.module.css'

const ErrorMessage = ({message}) =>
{

	return (
		<div className = {classes.ErrorMessage}>
			<p>{message}</p>
		</div>
	)
}

ErrorMessage.propTypes =
{
	message: PropTypes.string,
};

export default ErrorMessage