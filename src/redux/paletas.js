import * as ActionTypes from './ActionTypes';


export const Paletas = (state = {
    isLoading: true,
    errMess: null,
    paletas: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PALETAS:
            return {...state, isLoading: false, errMess: null, paletas: action.payload};

        case ActionTypes.PALETAS_LOADING:
            return {...state, isLoading: true, errMess: null, paletas: []};
        
        case ActionTypes.PALETAS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, paletas: []};

        default:
            return state;
    }
}