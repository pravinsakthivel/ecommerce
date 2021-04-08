export default {
    updateCart(context,data){
        console.log(data);
        const cartItem = {};
        for(let item in data){
            cartItem[item] = data[item];
        }
        context.commit('updateCart',cartItem);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    }
}