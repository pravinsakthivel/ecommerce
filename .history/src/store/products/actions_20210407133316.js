export default {
    updateCart(context,payload){
        console.log(payload);
        for(item in payload){
            console.log(item);
        }
        context.commit('updateCart',payload);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}