//Action Constants
import actionTypes from '../actions/actionTypes'

//State
const initialState =
{
	token:null,
	userEmail: null,
	data: null,
	trendingKeyword: null,
	favorites: [],
	isLoading: false,
	error: null,
}


//Action Reducer
const reducer = (state = initialState, action) =>
{
	switch (action.type)
	{
		case actionTypes.LOGIN:
			return {
				...state,
				token: action.payload.token,
				userEmail: action.payload.email,
				error: null
			}
		
		case actionTypes.LOGOUT:
			return { ...state, token: null, loginStatus: null, error: null }

		case actionTypes.GET_DATA:
			const data = []

			//Filtering Json
			const filteredData = action.payload.map(item =>
			{
				return item.data
			})


			filteredData.map(item =>
			{
				const dataObject = {}
			
				if (item.preview)
				{
					const fixedUrl = item.preview.images[0].source.url.replaceAll('amp;', '')
					const fixedResolutionUrl = item.preview.images[0].resolutions.map(item =>
					{
						item.url = item.url.replaceAll('amp;', '')
						return item
					})

					dataObject.id = item.preview.images[0].id
					dataObject.title = item.title
					dataObject.author = item.author
					dataObject.url = item.url
					dataObject.ups = item.ups
					dataObject.downs = item.downs
					dataObject.image = {...item.preview.images[0].source, url:fixedUrl}
					dataObject.imageResolutions = fixedResolutionUrl
					
					data.push(dataObject)
				}
			})

			return {
				...state,
				data: data,
				isLoading: false,
				error: null,
			}
		
		case actionTypes.SET_LOADING:
			return { ...state, isLoading: true }
		
		case actionTypes.SET_TRENDING_KEYWORD:
			return { ...state, trendingKeyword: action.payload }
		
		case actionTypes.ADD_FAVORITE:
			const addId = action.payload
			const favoritesAddState = [...state.favorites]

			state.data.filter(image =>
			{
				if (image.id === addId)
				{
					favoritesAddState.push(image)
				}
			})

			return { ...state,  favorites: favoritesAddState}
		
		case actionTypes.DELETE_FAVORITE:
			const deleteId = action.payload
			
			const favoritesDeleteState = state.favorites.filter(image =>
			{
				return image.id !== deleteId
			})

			return { ...state, favorites: favoritesDeleteState}
		
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