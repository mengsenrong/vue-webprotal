<template>
    <div class="nav">
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <el-menu 
                    :default-active="activeIndex" 
                    mode="horizontal" 
                    background-color="gray"
                    text-color="#ffffff" 
                    active-text-color="#ffffff">
                        <el-menu-item @click="before_jump(1)" index="1">
                             {{item_face.name}}
                        </el-menu-item>
                        <el-menu-item  @click="before_jump(2)" index="2">
                            {{item_daymic.name}}
                        </el-menu-item>
                        <el-menu-item @click="before_jump(3)" index="3"><a>投资概况</a></el-menu-item>
                        <el-submenu @click="before_jump(4)" index="4">
                            <template slot="title">关于我们</template>
                                <el-menu-item index="4-1">公司历史</el-menu-item>
                                <el-menu-item index="4-2">领导架构</el-menu-item>
                                <el-menu-item index="4-3">质量管理</el-menu-item>
                        </el-submenu>
                        <el-menu-item @click="before_jump(5)" index="5"><a>加入我们</a></el-menu-item>
                        <el-menu-item @click="before_jump(6)" index="6"><a>联系我们</a></el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
   
</template>

<script>
export default {
   data(){
       return{
           activeIndex:'1',
           item_face: {name:'首页', router: 'home'},
           item_daymic: {name: '公司动态', router: 'dynamic'},
       }
   },
   methods:{
       before_jump(index){
           this.$store.commit('change',index);
       }
   }
}
</script>

<style scoped>
    .el-row{
        background-color: gray;
    }
    .el-col {
        margin-left: 60px;
        margin-right: 60px;
        background-color: gray;
    }
    .el-menu{
        margin-left:120px;
    }
    .el-menu-item {
        width: 120px;
        font-family: "微软雅黑";
        font-size: 16px;
        background-color: gray !important;
    }
    .el-menu-item:hover{
        outline: 0 !important;
        color: black !important;
        background-color: rgb(242, 246, 248) !important;
    }
    .el-menu-item.is-active{
        background-color: rgb(163, 198, 219) !important;
        color: white !important;
    }
    .nav_link{
        text-decoration: none;
    }
    .el-menu.el-menu--horizontal {
    border-bottom: 0;
}


</style>


