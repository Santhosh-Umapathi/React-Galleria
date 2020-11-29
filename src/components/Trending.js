import React from 'react'
//Css
import classes from './Components.module.css'
//Redux
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions/actions'


const Trending = () =>
{

	const dispatch = useDispatch()

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

	const setTrendingKeywordHandler = (keyword) =>
	{
		dispatch(actions.getData(keyword, 10))
		dispatch(actions.setTrendingKeyword(keyword))
	}
	

	const keywords = randomKeywords.map(keyword =>
	{
		return <p
			id = {keyword.id}
			className={classes.TrendingKeywords}
			onClick={() => setTrendingKeywordHandler(keyword.label)}
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
