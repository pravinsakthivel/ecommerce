<template>

  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="baseModalLabel">
          <slot name="title"></slot>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <slot name="body"></slot>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          <slot name="secondaryButton"></slot>
        </button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="clickAction">
         <slot name="primaryButton"></slot>

        </button>
      </div>
    </div>
  </div>
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