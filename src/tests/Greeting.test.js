import React from 'react'
import ReactDOM from 'react-dom'
//Component
import Greeting from '../components/Greeting'


import { render } from '@testing-library/react'


import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'



describe('With React Testing Library', () => {
  const initialState = {output:10}
  const mockStore = configureStore()
  let store,wrapper

  it('Shows "Greeting text & Name"', () => {
    store = mockStore(initialState)
    const { getByTestId } = render(<Provider store={store}><Greeting /></Provider>)
	  expect(getByTestId('Greeting')).not.toBeNull()
  })
})