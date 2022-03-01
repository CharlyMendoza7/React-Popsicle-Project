import * as ActionTypes from './ActionTypes';

export const addComment = (paletaId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        paletaId: paletaId,
        rating: rating,
        author: author,
        comment: comment
    }
})