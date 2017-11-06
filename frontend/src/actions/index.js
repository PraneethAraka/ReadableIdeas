export const ADD_POST = 'ADD_POST'
export const ADD_COMMENTS = 'ADD_COMMENTS'

export function addPost ({ post }) {
  return {
    type: ADD_POST,
    post
  }
}

export function addComments ({ comment }) {
  return {
    type: ADD_COMMENTS,
    comment
  }
}
