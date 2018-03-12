import * as types from './types';



export const addItem = (id) => ({
    type: types.ADD_ITEM,
    payload: {
        value: id
    }
});
export const removeItem = (id) => ({
    type: types.REMOVE_ITEM,
    payload: {
        value: id
    }
});


