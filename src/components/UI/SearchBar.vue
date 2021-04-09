<template>
  <div class="row">
    <div class="input-group input-group-lg col-lg-12">
      <input
        type="text"
        class="form-control input-lg mt-10"
        id="search-product"
        v-model="searchText"
        placeholder="Search products"
      />
      <span class="input-group-btn">
        <base-button
          @click-action="searchProduct"
          customClass="btn btn-default btn-lg ml-2"
          >Search</base-button
        >
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchProduct() {
      this.$emit("search-product", this.searchText);
    },
  }
};
</script>
