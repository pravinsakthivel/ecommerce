<template>
  <div class="modal " id="productItemModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Description</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img
          :src="product.productImage"
          class="card-img-top img-height"
          alt="img"
        />
        <hr>
          <p>{{ cProduct.productDesc}}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="closeModal()"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show" id="backdrop" style="display: none;"></div>

</template>
<script>
export default {
  props: ["cProduct"],
  methods: {
    closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("productItemModal").style.display = "none"
    document.getElementById("productItemModal").classList.remove('show');
    },
  },
};
</script>
