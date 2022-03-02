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
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(paletas => dispatch(addPaletas(paletas)))
        .catch(error => dispatch(paletasFailed(error.message)));
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
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
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
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': '+ response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
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