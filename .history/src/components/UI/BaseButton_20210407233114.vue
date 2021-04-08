<template>
    <button
        class="btn btn-primary"
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