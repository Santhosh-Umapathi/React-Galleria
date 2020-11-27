import React from 'react'
//Css
import classes from './Components.module.css'

const Trending = (props) =>
{

	const trendingKeywords = [
		{id: "Athonet", label: "Athonet" },
		{id: "Dog", label :"Dog"},
		{id: "Cat", label :"Cat"},
		{id: "Bike", label :"Bike"},
		{id: "Lake", label :"Lake"},
		{id: "Sky", label :"Sky"},
		{ id: "Nature", label: "Nature" },
		{ id: "Car", label: "Car" },
		{id: "Italy", label :"Italy"},
		{id: "Mountain", label :"Mountain"},
		{id: "Rome", label :"Rome"},
		{id: "Venice", label :"Venice"}
	]

	// Shuffle array
	const shuffled = trendingKeywords.sort(() => 0.5 - Math.random());

	// Get sub-array of first n elements after shuffled
	let randomKeywords = shuffled.slice(0, 5);

	const keywords = randomKeywords.map(keyword =>
	{
		return <p
			id = {keyword.id}
			className={classes.TrendingKeywords}
			onClick={() => console.log(keyword.label+"clicked")}
		>
			{keyword.label}
		</p>
	})

	return (
		<div className = {classes.Trending}>
			<p>Trending Now..</p>
			{keywords}
		
		</div>
	)
}

export default Trending;
