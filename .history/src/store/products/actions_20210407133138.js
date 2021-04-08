export default {
    updateCart(context,payload){
        context.commit('updateCart',payload);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}