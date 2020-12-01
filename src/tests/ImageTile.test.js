import React from 'react'

//Testing
import { render, cleanup } from '@testing-library/react'

//Redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

//Component
import ImageTile from '../components/ImageTile/ImageTile'

afterEach(cleanup);

describe('Image Tile Rendering', () =>
{
  const initialState = {trendingKeyword:null}
  const mockStore = configureStore()
  let store,wrapper

	it('Sets image data"', () =>
	{
		store = mockStore(initialState)
		const { getByTestId } = render(<Provider store={store}><ImageTile /></Provider>)

		expect(getByTestId('ImageTile')).not.toBeNull
	})
})


		