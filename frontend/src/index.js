import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(reducer, 0)

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "ADD_POST", voteScore: 1})
store.dispatch({type: "ADD_COMMENTS", voteScore: 1})

ReactDOM.render(
  <Provider store = {store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
