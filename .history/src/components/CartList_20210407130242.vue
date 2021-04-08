<template>
  <div class="container-fluid">
    <div class="row" v-for="item in cartItems" :key="item.productId">
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="item.productImage" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{{item.productName}}</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
.card-horizontal {
    display: flex;
    flex: 1 1 auto;
}
</style>