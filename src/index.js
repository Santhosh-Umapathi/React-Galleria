import React from 'react';
import ReactDOM from 'react-dom';

//Root Component
import App from './App';

//CSS
import './index.css'

//React Router
import { BrowserRouter } from 'react-router-dom'

//Reducer
import reducers from './store/reducers/reducers'

//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; //Middleware

//Redux DevTools
const composeEnhancers = process.env.NODE_ENV === "development" ? (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) : null || compose;

//Store
const store = createStore(reducers, (applyMiddleware(thunk)))


const app = (
	<Provider store = {store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
