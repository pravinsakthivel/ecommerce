export default {
    updateCart(context,payload){
        console.log("addToCart",payload);
        context.commit('updateCart',payload);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}