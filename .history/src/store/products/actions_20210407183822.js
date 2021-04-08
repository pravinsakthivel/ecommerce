export default {
    updateCart(context,data){
        state.cartItems = [...context.getters.getcartItems(),payload];

        context.commit('setCartItmes',data);
    },
    setProducts(context,payload){
        context.commit('setProducts',payload);
    },
    removeCartItem(context,productId){
        let cartItems = context.getters.getcartItems();
      let filteredItems = cartItems.filter((item)=>{
        return item.productId != productId;
      });
      context.commit('setCartItmes',filteredItems);
    }
}