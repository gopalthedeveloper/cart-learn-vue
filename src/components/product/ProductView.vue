<template>
  <div class="product-detail">
      <div class="img-section">
        <img :src="product.image_url" class="product-image"/>
        <div > {{product.offer_text}}</div>
      </div>
      <div class="details-section">
        <div class="brand-name"> {{product.brand_name}}</div>
        <div > {{product.product_name}}</div>
        <div > {{product.quantity}}</div>
        <div > MRP {{product.mrf}}</div>
        <div > <b>Rs {{product.price}}</b></div>
        <div class="cart-functinality">
          <button type="button" @click="qtyIncrese" class="btn btn-green">Add Cart</button>
          <div class="product-counts">
            <button type="button" @click="qtyIncrese" class="btn btn-round btn-green">+</button>
            {{qty}}
            <button type="button" @click="qtyDecrese" class="btn btn-round btn-green">-</button>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data(){
      return {
        qty:0
      }
    },
    // computed:{
    // },
    props:["product"],
    created(){
      this.qty = this.product.addQty = 0;
    },
    methods:{
      ...mapMutations(['addToCart',"updateCartProduct"]),
      qtyIncrese: function(){
        this.qty = this.product.addQty =parseInt(this.product.addQty )+1;
        this.updateCartProduct(this.product);
        return 1;
      },
      qtyDecrese: function(){
        this.product.addQty = parseInt(this.product.addQty);
        this.product.addQty = this.product.addQty > 0
                                ?
                              parseInt(this.product.addQty)-1
                                :
                              0;
        this.qty = this.product.addQty;
        this.updateCartProduct(this.product);
        return 1;
                              
      },
      productToCart: function(){
        this.addToCart(this.product);
        this.product.addQty = 1;
        this.qty = this.product.addQty;
      }
    }
}
</script>

<style>

 .product-image {
     max-height: 80px;
     margin: 15px 40px 10px 40px;
 }
 .details-section {
     padding: 10px;
 }
 .brand-name {
     color:#2a650f;
     font-weight:bold;

 }
 .img-section{
   align-content: left;
   overflow: hidden;
   width: 180px;
    margin-right: 10px;
 }
 .details-section {
   width: 180px;
 }
 .cart-functinality{
   padding-top: 10px;
 }
 .product-counts{
   float: right;
 }
</style>