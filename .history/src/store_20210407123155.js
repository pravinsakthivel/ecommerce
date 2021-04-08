import {creteState} from 'vuex';
import productModule from './store/products/index.js'

const store = creteState({
   modules:{
        products:productModule
   }
});