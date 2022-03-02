import * as ActionTypes from './ActionTypes';
import { PALETAS } from '../shared/paletas';


export const addComment = (paletaId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        paletaId: paletaId,
        rating: rating,
        author: author,
        comment: comment
    }
})

export const fetchPaletas = () => (dispatch) => {
    dispatch(paletasLoading(true));

    setTimeout(() => {
        dispatch(addPaletas(PALETAS));
    }, 2000);
}

export const paletasLoading = () => ({
    type: ActionTypes.PALETAS_LOADING
});

export const paletasFailed = (errmess) => ({
    type: ActionTypes.PALETAS_FAILED,
    payload: errmess
});

export const addPaletas = (paletas) => ({
    type: ActionTypes.ADD_PALETAS,
    payload: paletas
})