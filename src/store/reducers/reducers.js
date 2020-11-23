import actionTypes from '../actions/actionTypes'

const initialState = {
	login: null
}




const reducer = (state = initialState, action) =>
{
	switch (action.type) {
		case actionTypes.LOGIN:
			
			return {
				...state,
			}
	
		
		
		default:
			return state;
	}

	
}

export default reducer;