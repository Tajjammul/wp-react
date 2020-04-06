const initState = {
    products: []
}

const StoreReducer = (state = initState, action) => {
    // console.log(action)
    if (action.type == 'addProduct') {
        return {
            ...state,
            products: [...state.products, action.payload]
        }
    }
    return state

}

export default StoreReducer;

