import actionTypes from './actionTypes'
import axios from '../../axios/axios'

export const loginDispatcher = () =>
{
	return {
		type: actionTypes.LOGIN,
		payload: value
	}
}



//Middleware
export const login = () =>
{
	return dispatch =>
	{
		// axios.get('https://react-burger-builder-49c67.firebaseio.com/ingredients.json')
		// 	.then(res => dispatch(setIngredients(res.data)))
		// 	.catch(err => dispatch(fetchIngredientsFailed()))
	}
}