import * as types from './types';



export const addItem = (position) => ({
    type: types.ADD_ITEM,
    payload: {
        value: position
    }
});
export const removeItem = (position) => ({
    type: types.REMOVE_ITEM,
    payload: {
        value: position
    }
});


