import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


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

    return fetch(baseUrl + 'paletas')
        .then(response => response.json())
        .then(paletas => dispatch(addPaletas(paletas)));
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

export const fetchComments = () => (dispatch) => {
    dispatch(paletasLoading(true));

    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})