<template>
    <div class="home">
        <el-row>
             <!-- S 中间区域-->
            <el-col :span="24">
                <div class="center"> 
                    <!-- 轮播大图-->
                    <div class="carousel">
                        <carousel></carousel>
                    </div>
                    
                    <!--公司介绍-->
                    <div class="introdu">
                        <introduction></introduction>
                    </div>
                   
                </div>
            </el-col>
            <!-- E 中间区域-->

        </el-row>

        <div>
            <h2>数据未来</h2>
            <div>
                <el-row>
                    <el-col :span="6">
                        <div class="wall">
                            <img :src="url_staff">
                            <h3>员工数量</h3>
                            <p>18,0000+</p>
                        </div>
                    </el-col>
                    <el-col :span="6" offset="3">
                        <div class="wall">
                            <img :src="url_position">
                            <h3>数据中心</h3>
                            <p>78</p>
                        </div>
                    </el-col>
                    <el-col :span="6" offset="3">
                        <div class="wall">
                            <img :src="url_institution">
                            <h3>研究所/院/室</h3>
                            <p>36</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="wall">
                            <img :src="url_dev">
                            <h3>创立时间</h3>
                            <p>2020年</p>
                        </div>
                    </el-col>
                    <el-col :span="6" offset="3">
                        <div class="wall">
                            <img :src="url_server">
                            <h3>提供服务</h3>
                            <p>10000+种</p>
                        </div>
                    </el-col>
                    <el-col :span="6" offset="3">
                        <div class="wall">
                            <img :src="url_tax">
                            <h3>缴纳税收</h3>
                            <p>100,0000,0000+/年</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        
        <!--
        <h2>未来动态</h2>
        <el-row>
            <el-col :span="6">
                <div>
                     <hotspot></hotspot>
                </div>
            </el-col>
           
        </el-row>
        -->

    </div>
</template>

<script>  
 
    import title from '@/components/Header'
    import carousel from '@/components/home/Carousel'
    import login from '@/components/Login'
    import hotspot from '@/components/HotSpot'
    import introduction from '@/components/Introduction'

    export default {
        name: 'home',
        data(){
            return{
                url_staff:require("../../assets/future-data/staff.jpg"),
                url_institution:require("../../assets/future-data/institution.jpg"),
                url_position:require("../../assets/future-data/position.jpg"),
                url_dev:require("../../assets/future-data/dev.jpg"),
                url_server:require("../../assets/future-data/server.jpg"),
                url_tax:require("../../assets/future-data/tax.jpg")
            }
        },
        components:{
            carousel,
            login,
            hotspot,
            introduction,
            title,
        }    
    }
</script>

<style scoped>

/*中间区域的样式*/
.center {
    position: relative;
    width: 100%;
    height: 100%;
   
}
.carousel {
    position: relative;
    margin-left: 10px;
}


.introdu {
    margin-top: 150px;
    margin-left: 10px;
    background-color: #fff;   
}


/*右侧样式*/
.right {
    height: 100%;
    /*margin-top: 20px;*/
    margin-left: 10px;
    margin-right: 10px;
}
.login{
    margin-left: 10px;
}
.hotspot {
    margin-top: 10px;
    margin-left: 10px;
}


h2{
    text-align: left;
    margin-top: 50px;
    color: black;
    
}
div.wall{
    background-color: rgb(163, 198, 219);
    padding-bottom: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-right: 10px;
    border-radius: 10px;
}
div.wall:hover{
    /*transform: scale(1.01);*/
    transform: scale(1.05);
    background-clip:padding-box,border-box;
    background-origin:padding-box,border-box;
    background-image:linear-gradient(135deg,#E70303,#FFFF44);   /*渐变*/
    /*border:2px transparent solid;*/
     box-shadow: 5px 5px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
img {
    width: 290px;
    height: 180px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

h3{
    margin-top: 20px;
    margin-bottom: 15px;
    color: black;
}
p{
    font-size: 120%;
    color: black;
}


</style>