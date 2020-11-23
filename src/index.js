import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//React Router
import { BrowserRouter } from 'react-router-dom'
//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//Reducer
import reducers from './store/reducers/reducers'

//Redux DevTools
const composeEnhancers = process.env.NODE_ENV === "development" ? (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) : null || compose;

//Store
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


const app = (
	<Provider store = {store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
