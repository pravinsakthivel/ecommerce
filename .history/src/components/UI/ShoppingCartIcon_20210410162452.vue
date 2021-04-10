<template>
<div @click="addToCart">
  <span><slot></slot>
  <i class="fa fa-shopping-cart fa-2x" ></i>
  <span class="badge badge-warning" id="lblCartCount" v-if="cartItemsCount > 0">{{ cartItemsCount }}</span></span>
  
</div>
</template>
<script>
export default {
  emits: ["go-to-cart"],
  props: ["cartItemsCount"],
  methods: {
    addToCart() {
      this.$emit("go-to-cart");
    },
  },
};
</script>
<style scoped>
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -10px;
}
</style>