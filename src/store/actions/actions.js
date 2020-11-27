//Actions Constant
import actionTypes from './actionTypes'
//Axios
import axios from '../../axios/axios'


const setDataToStore = (value) =>
{
	return {
		type: actionTypes.GET_DATA,
		payload:value
	}
}

const setLoading = () =>
{
	return {
		type: actionTypes.SET_LOADING,
	}
}

const setTrendingKeyword = (keyword) =>
{
	return {
		type: actionTypes.SET_TRENDING_KEYWORD,
		payload:keyword
	}
}

const error = (value) =>
{
	return {
		type: actionTypes.ERROR,
		payload:value
	}
}
	



//Middleware
const getData = (keyword, limit) =>
{

	const searchParam = `${keyword}/top.json?limit=${limit}`

	return dispatch =>
	{
		dispatch(setLoading())

		axios.get(searchParam)
			.then(res => dispatch(setDataToStore(res.data.data.children)))
			.catch(err => dispatch(error(err)))
	}
}

export {
	getData,
	setLoading,
	setTrendingKeyword

}