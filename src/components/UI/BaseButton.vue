<template>
  <router-link v-if="link" :to="toPage" :class="customClass" class="btn btn-primary" >
      <slot></slot>
  </router-link>
  <button
    v-else
    class="btn btn-primary"
    :class="customClass"
    type="submit"
    @click.prevent="clickAction"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  emits: ["click-action"],
  props: {
      link:{
          type:Boolean,
          required:false,
          default:false
      },
      toPage:{
        type:String,
        default:"/"
      },
      customClass:{
        type:String,
        default:""
      }
  },
  methods: {
    clickAction() {
      this.$emit("click-action");
    },
  },
};
</script>
<style scoped>
.btn-sbackground-black {
  background-color: black;
  color: white;
}
</style>