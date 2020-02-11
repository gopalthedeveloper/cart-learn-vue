<template>
  <div class="checkout-full">
    <div class="cart-details">
      <div>Qty:{{getQuantity()}}</div>
      <div>Total:{{getTotal()}}</div>
    </div>
    <div class="checkout-button">
      <button type="button" class="btn btn-green" @click="openModal">Checkout</button>
    </div>
    <Modal
      v-if="showModal"
      title="Cart Details"
      :showModal="showModal"
      :content="cartDetails"
      @response-modal="modalStatus"
      successButton="Place order"
    >
      <ModalCart :products="getProducts()" :total="getTotal()" ></ModalCart>
    </Modal>
  </div>
</template>

<script>
import { mapMutations,mapGetters } from "vuex";
import Modal from "../Modal";
import ModalCart from "./ModalCart";

export default {
  data() {
    return {
      cartDetails: "<b>test</b>",
      showModal: false
    };
  },
  components: {
    Modal,
    ModalCart
  },
  methods: {
    ...mapGetters(["getQuantity", "getTotal","getProducts"]),
    ...mapMutations(["emptyCart"]),
    openModal: function() {
      this.showModal = true;
    },
    modalStatus: function(result) {
        if(result == false) {
            this.showModal = false;
        } else {
            this.$router.push({name:"home"});
            this.emptyCart();
        }
    }
  }
};
</script>

<style>
.checkout-full {
  padding: 5px;
  display: flex;
  background-color: #f0c;
  align-self: center;
}
.cart-details {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}
.checkout-button {
  margin-left: auto;
  margin-right: 5%;
}
</style>