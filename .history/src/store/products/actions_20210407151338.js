export default {
    updateCart(context,data){
        console.log("data",data);
        context.commit('updateCart',data);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}