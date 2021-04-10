<template>
<button type="button" class="btn btn-primary" :class="customClass" data-toggle="modal" data-target="#baseModal" id="modal">
  <slot name="baseButton"></slot>
</button>

<div class="modal fade" id="baseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            {{primaryButton}}
        </button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  emits:['click-action'],
  props:["customClass","primaryButton"],
  methods:{
    clickAction(){
      this.$emit('click-action');
    }
  }
  
}
</script>