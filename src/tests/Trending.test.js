import React from 'react'

//Testing
import { render } from '@testing-library/react'

//Redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

//Component
import Trending from '../components/Trending'


describe('Trending Component', () =>
{
  const initialState = {trendingKeyword:null}
  const mockStore = configureStore()
  let store,wrapper

	it('Sets trending keyword search"', () =>
	{
		store = mockStore(initialState)
		const { getByTestId } = render(<Provider store={store}><Trending /></Provider>)

		expect(getByTestId('Trending')).not.toBeNull()
	})
})