<template>
  <div class="product-view">
      <ProductView v-for="(product,index) in products" :key="index" :product="product" class="product"></ProductView>
  </div>
</template>

<script>
import ProductView from './ProductView.vue';
export default {
  components:{
    ProductView
  },
  data () {
    return {
      // product: []
    }
  },
  props:["products"]
}
</script>

<style>

.product-view {
  display: flex;
  flex-direction: column;
}
.product {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    line-height: 1.5;
}
</style>
