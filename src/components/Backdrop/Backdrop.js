import React from 'react'

//Prop Types
import PropTypes from 'prop-types';

//Css
import classes from './Backdrop.module.css'

const Backdrop = ({show, clicked, children}) =>
{
	return (
		show
		? <div className={classes.Backdrop} onClick={clicked}>{children}</div>
		: null
	)
}

Backdrop.propTypes =
{
	show: PropTypes.bool,
	clicked: PropTypes.func,
	children: PropTypes.any,
};

export default Backdrop;