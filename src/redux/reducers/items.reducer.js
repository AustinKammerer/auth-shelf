const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        case 'LOGOUT':
            //change for stretch?
            return [];
        default:
            return state;
    }
}

export default itemsReducer;