import actionTypes from '../actions/actionTypes'

const initialState =
{
	login: null,
	data: null,
	error:null
}




const reducer = (state = initialState, action) =>
{
	switch (action.type) {
		case actionTypes.LOGIN:
			
			return {
				...state,
			}
		
		case actionTypes.GET_DATA:
		
			return {
				...state,
				data:action.payload
			}
		
		case actionTypes.ERROR:
	
			return {
				...state,
				error:action.payload
			}
	
		
		
		default:
			return state;
	}

	
}

export default reducer;