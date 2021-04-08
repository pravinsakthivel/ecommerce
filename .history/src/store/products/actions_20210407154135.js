export default {
    updateCart(context,data){
        context.commit('updateCart',data);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    },
    updateCartFlag(context,productId){
        let productItems = context.getters.getProducts;
        let updatedItems = productItems.map(element => {
            if(element.productId == productId ){
                element['inCart'] = true;
            }
        });
        console.log(updatedItems);
        context.commit('setProducts', updatedItems);
    }
}