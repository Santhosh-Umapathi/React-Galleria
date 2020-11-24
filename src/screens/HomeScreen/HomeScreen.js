import React, {useState, useEffect} from 'react';

//CSS
import classes from './HomeScreen.module.css'

//Logo Animated
import logo from '../../assets/images/logo-animated.gif';

//Components
import Searchbar from '../../components/Searchbar';
import Trending from '../../components/Trending';


const HomeScreen = (props) =>
{



	return (
		<div className = {classes.RootDiv}>
			<img src={logo} className={classes.Image} />
			
			<Searchbar />

			<Trending />

		</div>
		);
};




export default HomeScreen;