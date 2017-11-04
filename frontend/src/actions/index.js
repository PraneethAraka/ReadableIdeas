export const ADD_POST = 'ADD_POST'
export const ADD_COMMENTS = 'ADD_COMMENTS'

export function addPost ({ id, timeStamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: ADD_POST,
    id,
    timeStamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}

export function addComments ({ id, parentId, timeStamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: ADD_POST,
    id,
    parentId,
    timeStamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}

