<template>
    <div class="review-cart">
        <div class="row-group-header">
            <div  class="modal-product-row">
                <span class="modal-product-cell">Product Name</span>
                <span class="modal-product-cell">Price</span>
                <span class="modal-product-cell">Quantity</span>
                <span class="modal-product-cell">Product price</span>
            </div>
        </div>
        <div v-for="(product ,index) in products" :key="index" class="products row-group">
            <div v-if="product != null" class="modal-product-row">
                <span class="modal-product-cell">{{product.product_name}}</span>
                <span class="modal-product-cell">{{product.price}}</span>
                <span class="modal-product-cell">x {{product.addQty}}</span>
                <span class="modal-product-cell">{{product.price * product.addQty}}</span>
            </div>
        </div>
        <div class="products row-group modal-product-row">
            <span class="modal-product-cell no-boder"></span>
            <span class="modal-product-cell no-boder"></span>
            <span class="modal-product-cell footer-title">Total</span>
            <span class="modal-product-cell">{{total}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        products:{
            type:Array,
            default: () => {
                return [];
            }
        },
        total:{
            type:Number,
            default:0
        }
    },
    
}
</script>

<style>

.review-cart {
    display:table;
     border-collapse: collapse;
     width: 100%
}
.row-group-header {
    display:table-header-group;
    font-weight:bold;
}
.row-group {
    display:table-row-group;
}
.modal-product-row {
    display:table-row;
    height: 28px;
}
.modal-product-cell {
    display:table-cell;
    width:25%;
    text-align:left;
    border: 1px solid rgb(131, 131, 131);
    padding-left: 1%;
    vertical-align: middle;
}
.footer-title {
    text-align: right;
    font-weight: bold;
    padding-right:5%;
    border-color:  rgb(131, 131, 131);
    border-collapse: separate;
}
.no-boder{
    border: none;
}

</style>