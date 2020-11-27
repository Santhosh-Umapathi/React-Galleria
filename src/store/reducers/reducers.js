import actionTypes from '../actions/actionTypes'

const initialState =
{
	data: null,
	isLoading:false,
	error:null
}




const reducer = (state = initialState, action) =>
{
	switch (action.type)
	{

		case actionTypes.GET_DATA:
		
			return {
				...state,
				data: action.payload,
				isLoading: false,
				error: null,
			}
		
		case actionTypes.SET_LOADING:
			return { ...state, isLoading:true }
		
		case actionTypes.ERROR:
			return {
				...state,
				error: action.payload,
				isLoading:false
			}
	
		
		
		default:
			return state;
	}

	
}

export default reducer;