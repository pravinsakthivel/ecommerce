import {createStore} from 'vuex';
import productModule from './store/products/index.js'

const store = createStore({
   modules:{
        products:productModule
   }
});

export default store;