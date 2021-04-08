export default {
    updateCart(context,payload){
        console.log(payload);
        for(let item in payload){
            console.log(item);
        }
        context.commit('updateCart',payload);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}