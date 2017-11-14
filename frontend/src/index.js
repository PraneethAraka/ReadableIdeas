import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(reducer, 0)

const post = {
}

const comment = {
}

store.dispatch({type: "ADD_POST", post})
store.dispatch({type: "ADD_COMMENTS", comment})

ReactDOM.render(
  <Provider store = {store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
