import Vue from 'vue'


function createNewProduct(state, product) {
  if (product.addQty) {
    Vue.set(state.cart.products, product.product_id, { ...product });
    calculateCartTotal(state);
    countCartItems(state);
  }
  return 1;
}

function updateCartProductQty(state, product) {
  if (product.addQty) {
    Vue.set(state.cart.products[product.product_id], "addQty", parseInt(product.addQty));
  } else {
    Vue.delete(state.cart.products, product.product_id);
  }
  calculateCartTotal(state);
  countCartItems(state);
  return 1
}

function calculateCartTotal(state) {
  let total = 0;
  for (var index in state.cart.products) {
    if (!state.cart.products.hasOwnProperty(index)) continue;

    let value = state.cart.products[index];
    total += parseInt(value.price) * parseInt(value.addQty);
  }

  Vue.set(state.cart, "total", total);
  return 1;
}

function countCartItems(state) {
  Vue.set(state.cart, "noItems", Object.keys(state.cart.products).length);
  return 1;

} 


export const addToCart = (state, product) => {
  if (state.cart.products[product.product_id]) {
    let temp = { ...product };
    temp.addQty = parseInt(state.cart.products[product.product_id].addQty) + parseInt(product.addQty);
    updateCartProductQty(state, temp);
  } else {
    createNewProduct(state, product);
  }
  return 1;
}

export const updateCartProduct = (state, product) => {
  if (state.cart.products[product.product_id]) {
    updateCartProductQty(state, product)
  } else {
    createNewProduct(state, product);
  }
  return 1;
}
export const emptyCart = (state) => {
  Vue.set(state.cart, "products", {});
  return 1;
}
