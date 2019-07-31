<template>
  <div id="app">
     <!--头部标题模块-->
    <div class="header">         
        <m_title></m_title>
    </div>
  <!--导航栏模块-->
    <div class="navigation">
      <navigation></navigation>
    </div>

<!--中间部分模块-->
    <div class="router">
      
      <div v-if="ac_index==1">
        <home></home>
      </div>
      <div v-if="ac_index==2">
        <dynamic></dynamic>
      </div>
     <div v-if="ac_index==3"></div>
     <div v-if="ac_index==4"></div>
     <div v-if="ac_index==5"></div>
     <div v-if="ac_index==6"></div>
      <!--<router-view></router-view>-->
    </div>


    <!--底部模块-->    
    <div class="foot">
      <foot></foot>
    </div> 
     

  </div>
</template>

<script>
import foot from '@/components/Foot'
import m_title from '@/components/Header'
import navigation from '@/components/Navigation'
import home from '@/components/home/Home'
import dynamic from '@/components/dynamic/Dynamic'

export default {
  name: 'App',
  components:{
    foot,
    m_title,
    navigation,
    home,
    dynamic
  },
  
  computed: {
    ac_index () {
      return this.$store.getters.getActiveIndex;
    }
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0 auto;
  background-color: #ffffff;
}
.header {
  margin: 0 auto;
  padding-left: 50px;
  width: 1200px;
  background-color: #ffffff;
}

.navigation {
  position: flex;
  margin: 0 auto;
  width: 100%;
}

.foot{
  margin: 0 auto;
  margin-top: 50px;
  background-color: rgb(217, 228, 235);
}

.router{
  margin: 0 auto;
  /*margin-top:30px;*/
  width: 1200px;
}

</style>
