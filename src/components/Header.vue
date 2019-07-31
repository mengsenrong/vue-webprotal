<template>
  <div class="head">

    <!--S 头部标题栏模块-->
    <el-row class="title"> 
        <el-col :span="2">
          <h1 class="logo">
            <img class="logo__img" :src="url_title_imge">
          </h1>
        </el-col>
        <el-col :span="14"   >
          <h1 class="title_corporation">{{title_info}}</h1>
        </el-col>
        <el-col :span="2" offset="3">
            <div class="login">
              <img class="button_img" :src="url_login">
              <a>登录</a>
            </div>
        </el-col>
         <el-col :span="2">
           <div class="register">
              <img class="button_img" :src="url_register">
               <a>注册</a>
            </div>
        </el-col>
      
    </el-row>
    <!--S 头部标题栏模块-->

  </div>
</template>

<script>
export default {
  data() {
    return {    
      url_title_imge:require("../assets/head/title-image.png"),
      title_info:"Future Corporation",
      url_login:require("../assets/head/login.png"),
      url_register:require("../assets/head/register.png"),
   }
  }
}
</script>

<style scoped>

h1 {
  padding: 0;
  margin: 0;
}

/* 主体布局 */
.head {
  width: 1200px;
  margin: 0 auto;
}


/*头部标题模块
-------------------------------------------*/
.title {
  display: flex;
  align-items: center;
  height: 60px;
}

/* 标题title-corporation布局*/
.title_corporation {
  color:black;
  text-align: left;
  margin-left: 50px;
}


/* 头部logo导航模块
-------------------------------------------- */

.logo {

  width: 124px;
  height: 54px;
}
.logo__img {
  display: block;
  width: 124px;
  height: 54px;
}


a{
  position:absolute;
  margin-top:20px;
  margin-left: 5px;
}
a:hover{
  transform: scale(1.2);
  /*linear-gradient(135deg,#E70303,#FFFF44);*/
  cursor: pointer;
  color:black
}

.button_img{
  width: 25px;
  height: 25px;
  margin-top:20px;
  border: none;
}
p{
  font-size: 15px;
}

.el-button{
  background-color: gray;
}




</style>