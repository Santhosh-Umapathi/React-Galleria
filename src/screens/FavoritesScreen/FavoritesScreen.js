import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';

const FavoritesScreen = (props) =>
{



	return (
		<div style={styles.containerView}>
			<p style={styles.text}>FavoritesScreen</p>
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

export default FavoritesScreen;