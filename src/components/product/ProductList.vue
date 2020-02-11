<template>
  <div>
    <ProductGrid :products="products"></ProductGrid>
    <div class="cart-content">
      <CartView class="listCart"></CartView>
    </div>
  </div>
</template>

<script>
// import { Product } from "../../mixins/product";
import ProductGrid from "./ProductGrid.vue";
import CartView from "../cart/CartView.vue";
import { mapActions } from "vuex";

export default {
  components: {
    ProductGrid,
    CartView
  },
  data() {
    return {
      products: []
    };
  },
  // mixins: [Product],
  mounted() {
    this.ProductList().then(response => {
      this.products = response.product;
    });
  },
  methods:{
    ...mapActions(['ProductList'])
  }
};
</script>

<style>
.product {
  border-bottom: 1px solid #635c92;
  font-family: Arial, Helvetica, sans-serif;
}

.btn {
  padding: 5px;
  border-color: transparent;
  color: #000;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0.9;
}

.btn:active {
  transform: translateY(2px);
}
.btn-green {
  background-color: #65ce34;
}
.btn:hover {
  opacity: 1;
}
.btn-round {
  border-radius: 50%;
  padding: 2px 8px 4px 8px;
}
.cart-content {
  padding-left: 15%;
  bottom: 0px;
  position: fixed;
  width: 100%;
}
.listCart{
  max-width: 70%;
}
@media only screen and (max-width: 768px) {
  .cart-content {
    padding-left: 0%;
    width: 100%;
    margin-left: -2%;
  }
  .listCart{
    max-width: 100%;
  }
}
</style>
