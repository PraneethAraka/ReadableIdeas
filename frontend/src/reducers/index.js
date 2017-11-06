import { combineReducers } from 'redux';

import {
  ADD_POST,
  ADD_COMMENTS
} from '../actions'

function post (state = {}, action) {
  if (action.type === "ADD_POST")
      {
      return action.state+action.voteScore;
      }
      return state;
}

function comment (state = {}, action) {
  if (action.type === "ADD_COMMENTS")
      {
      return action.state+action.voteScore;
      }
      return state;
}

export default combineReducers({
  post,
  comment
})
