<template>
  <!-- The Modal -->
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" title="Close Modal" @click="responseModal(false)">×</span>
        <h3 class="modal-title">{{title}}</h3>
      </div>

      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" @click="responseModal(false)" class="cancelbtn btn">Cancel</button>
        <button type="button" class="primary btn pull-right" @click="responseModal(true)">{{successButton}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
        title: {
            type: String,
            default: "Confirmation"
        }, 
        successButton: {
            type: String,
            default: "Ok"
        }, 
  },
  methods: {
    responseModal: function(result = false) {
      this.$emit("response-modal", result);
    }
  }
};
</script>

<style>
.modal-title{
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 12px;
}
/* Add a color to the cancel button */
.cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
.primary {
  background-color: #3072ee;
  min-width: 50px;
}

/* Add padding and center-align text to the container */
.modal-body {
  padding: 16px;
  text-align: center;
}

/* The Modal (background) */
.modal {
  display: block; /*Hidden by default*/
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
  border-radius: 10px;
}
.modal-header {
  padding: 5px;
  border-bottom: 1px solid rgb(112, 111, 111);
}
.modal-footer {
  border-top: 1px solid rgb(112, 111, 111);
  padding: 20px;
}
/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Modal Close Button (x) */
.close {
  float: right;
  margin-top: 11px;
  font-size: 15px;
  font-weight: bold;
  margin-right: 9px;
}
.pull-right {
    float: right;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and delete button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}
</style>
