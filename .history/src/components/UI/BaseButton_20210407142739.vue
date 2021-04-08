<template>
    <button
        class="btn btn-primary my-2 my-sm-0 mr-1"
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