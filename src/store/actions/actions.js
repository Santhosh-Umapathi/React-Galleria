//Actions Constant
import actionTypes from './actionTypes'
//Axios
import {instance, loginInstance} from '../../axios/axios'


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

const addFavorite = (id) =>
{
	return {
		type: actionTypes.ADD_FAVORITE,
		payload:id
	}
}

const deleteFavorite = (id) =>
{
	return {
		type: actionTypes.DELETE_FAVORITE,
		payload:id
	}
}

const error = (value) =>
{
	return {
		type: actionTypes.ERROR,
		payload:value
	}
}
	
const setLoginStatus = (payload) =>
{
	return {
		type: actionTypes.LOGIN,
		payload:payload
	}
}

const logout = () =>
{
	return {
		type: actionTypes.LOGOUT,
	}
}



//Middleware
const login = (email, password) =>
{

	const postData = {
		email: email,
		password: password,
		returnSecureToken:true
	}

	return dispatch =>
	{
		dispatch(setLoading())

		loginInstance.post("", postData)
			.then(res => dispatch(setLoginStatus(res.data)))
			.catch(err => dispatch(error(err.response.data.error.message)))
	}
}

const getData = (keyword, limit) =>
{

	const searchParam = `${keyword}/top.json?limit=${limit}`

	return dispatch =>
	{
		dispatch(setLoading())

		instance.get(searchParam)
			.then(res => dispatch(setDataToStore(res.data.data.children)))
			.catch(err => dispatch(error()))
	}
}

export {
	login,
	logout,
	getData,
	setLoading,
	setTrendingKeyword,
	addFavorite,
	deleteFavorite,
	error

}