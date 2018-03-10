

const initialState = "";

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'UPDATE_SEARCH': {
            const term = action.payload.value;
            return term;
        }
        default:
            return state;
    }
   
};

export default reducer;