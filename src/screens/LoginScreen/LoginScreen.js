import React, { useState, useEffect } from 'react';

//CSS
import classes from './LoginScreen.module.css'

//Logo Animated
import logo from '../../assets/images/logo-animated.gif';



const LoginScreen = (props) =>
{



	return (
		<div className = {classes.RootDiv}>
			<img src={logo} className = {classes.Image}/>
			
			<div className={classes.InputContainer}>
				<input placeholder="Email" />
				
				<input placeholder = "Password" />

				<button>Let's Go..</button>
			</div>
		</div>
	);
};




export default LoginScreen;