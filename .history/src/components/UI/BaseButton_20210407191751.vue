<template>
    <button
        class="btn btn-primary mr-1 mt-2"
        type="submit"
        @click.prevent="clickAction"
      >
        <slot></slot>
      </button>
</template>
<script>
export default {
    emits:['click-action'],
    methods:{
        clickAction(){
            this.$emit('click-action');
        }
    }
}
</script>