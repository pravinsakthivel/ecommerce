<template>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="modal">
  Remove Item
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Remove Item</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Do you want to remove item from cart ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="removeProductItem">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props:['productId'],
  emits:['remove-item'],
  methods:{
    removeProductItem(productItem){
      this.$emit('remove-item',productItem);
    }
  }
  
}
</script>