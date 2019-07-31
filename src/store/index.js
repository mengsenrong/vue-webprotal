import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);


export default new vuex.Store({
   state:{
       active_index: 1,
   },
   mutations:{
       change(state,index){
           state.active_index = index;
       }
   },
   getters:{
       getActiveIndex(state){
           return state.active_index;
       }
   }

})