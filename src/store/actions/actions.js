import actionTypes from './actionTypes'
import axios from '../../axios/axios'

const loginDispatcher = (value) =>
{
	return {
		type: actionTypes.LOGIN,
		payload: value
	}
}


const setDataToStore = (value) =>
{
	return {
		type: actionTypes.GET_DATA,
		payload:value
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
		axios.get(searchParam)
			.then(res => dispatch(setDataToStore(res.data.data.children)))
			.catch(err => dispatch(error(err)))
	}
}

export {
	getData,

}