export const getQuantity = (state) => {
    return state.cart.noItems?state.cart.noItems:0;
}

export const getTotal = (state) => {
    return state.cart.total?state.cart.total:0;
}

export const getProducts = (state) => {
    return state.cart.products?state.cart.products:0;
}