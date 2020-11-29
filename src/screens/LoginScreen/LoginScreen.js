import React, { useState } from 'react';

//CSS
import classes from './LoginScreen.module.css'

//Logo Animated
import logo from '../../assets/images/logo-animated.gif';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions'

//Components
import ErrorMessage from '../../Error/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';


const LoginScreen = () =>
{

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	//Redux Actions
	const dispatch = useDispatch()
	const state = useSelector(state => state)

	//Set input and clear error
	const inputHandler = (event , action) =>
	{
		action(event.target.value)
		if (state.error)
		dispatch(actions.error(null))
	}

	//Send Login request
	const loginHandler = () =>
	{
		//Check basic validity
		if (email === "" || password === "")
		dispatch(actions.error("Enter Email & Password"))
		else
		dispatch(actions.login(email, password))
	}

	return (
		<div className = {classes.RootDiv}>
			<img src={logo} className = {classes.Image} alt = "login"/>
			
			<div className={classes.InputContainer}>
				<input
					placeholder="Email"
					value={email}
					onChange = {(e) => inputHandler(e, setEmail)}
				/>
				
				<input
					placeholder="Password"
					value={password}
					onChange={(e) => inputHandler(e, setPassword)}
					type = "password"
				/>

				{
					state.error
					? <ErrorMessage message={state.error} />
					: null
				}

				{
					state.isLoading
					? <Spinner />
					: null
				}
				
				
				<button onClick={loginHandler}>
					Let's Go..
				</button>
			</div>
		</div>
	);
};




export default LoginScreen;