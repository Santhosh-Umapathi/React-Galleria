import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen = (props) =>
{



	return (
		<div style={styles.containerView}>
			<p style={styles.text}>HomeScreen</p>
		</div>
		);
};


const styles = StyleSheet.create({
	containerView:
	{
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: 
	{
		fontSize: 30,
	},
});

export default HomeScreen;