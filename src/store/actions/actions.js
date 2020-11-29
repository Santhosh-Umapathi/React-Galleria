//Actions Constant
import actionTypes from './actionTypes'
//Axios
import {instance, loginInstance, userInstance} from '../../axios/axios'


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
	
const setLoginStatus = (token, email) =>
{
	return {
		type: actionTypes.LOGIN,
		payload: { token:token, email:email}
	}
}


const logout = () =>
{
	localStorage.removeItem("token")
	localStorage.removeItem("email")

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
			.then(res =>
			{
				dispatch(setLoginStatus(res.data.idToken, res.data.email))
				localStorage.setItem("token", res.data.idToken);
				localStorage.setItem("email", res.data.email);
			})
			.catch(err => dispatch(error(err.response.data.error.message)))
		
	}
}

//Check if already logged in 
const checkLoginStatus = () =>
{
	return dispatch =>
	{
		const token = localStorage.getItem("token")
		const email = localStorage.getItem("email")

		if (!token)
		dispatch(logout())
		else
		dispatch(setLoginStatus(token, email))	
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
			.catch(err => dispatch(error(err)))
	}
}



export {
	login,
	checkLoginStatus,
	logout,
	getData,
	setLoading,
	setTrendingKeyword,
	addFavorite,
	deleteFavorite,
	error

}