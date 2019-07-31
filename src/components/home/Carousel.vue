<template>
  <div class="block">
 
    <el-carousel height="550px">
      <el-carousel-item v-for="item in images" :key="item.url">
        <h3><img :src="item.url" width=100%></h3>
      </el-carousel-item>
    </el-carousel>
    <img  class="saying" :src="url_santi1">
  </div>
</template>

<script>
    export default {
        data() {
            return {
                images:[
                    {url: require("../../assets/nav/150636.jpg")},
                    {url: require("../../assets/nav/150650.jpg")},
                    {url: require("../../assets/nav/151533.jpg")},
                ],
                url_santi1: require("../../assets/nav/block3.png"),
            }
        },
        
    }
</script>

<style scoped>
    div.block{
      position: relative;
      z-index: 1;
    }
    .saying{
      position: absolute;
      top:450px;
      left:55px;
      border-radius: 10px;
      background-color: white;
      z-index: 100;
      box-shadow: 3px 5px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
   
    .el-carousel__item h3 {
    line-height: 150px;
    margin: 0;
    }


</style>

