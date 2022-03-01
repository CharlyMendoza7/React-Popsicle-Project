import { createStore, combineReducers } from 'redux';
import { Paletas } from './paletas';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            paletas: Paletas,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}