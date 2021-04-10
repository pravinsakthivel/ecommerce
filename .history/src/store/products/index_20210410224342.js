import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default{
    namespaced:true,
    state(){
        return{
            products: [],
            cartItems: [],
            productsIdsInCart:[],
            searchedItems:[],
            lastUpdated:null,
            loggedInUser :'',
            totalCartValue:0
        }
    },
    actions,
    getters,
    mutations
}