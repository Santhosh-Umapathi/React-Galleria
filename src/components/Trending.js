import React from 'react'
//Css
import classes from './Components.module.css'

const Trending = (props) =>
{

	return (
		<div className = {classes.Trending}>
			<p>Trending Now..</p>
			<p
				className={classes.TrendingKeywords}
				onClick={() => console.log("trend clicked")}
			>
				dog,
			</p>
			<p className = {classes.TrendingKeywords} onClick={() => console.log("trend clicked")}>cat,</p>
			<p className = {classes.TrendingKeywords} onClick={() => console.log("trend clicked")}>goat,</p>

		</div>
	)
}

export default Trending;
