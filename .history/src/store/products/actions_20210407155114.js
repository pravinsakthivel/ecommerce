export default {
    updateCart(context,data){
        context.commit('updateCart',data);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}