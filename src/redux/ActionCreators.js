import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, raiting, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        raiting: raiting,
        author: author,
        comment: comment
    } 
});