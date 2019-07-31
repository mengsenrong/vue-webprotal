<!--新闻动态-->
<template>
    <div class="news">
        <el-row>
            <el-col :span="4">
                <h2>近期动态</h2>
            </el-col>
             <el-col :span="4" offset="14">
                <h2>查看全部 ></h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" offset="2">
                <div class="wall">
                    <img :src="url_news">
                    <h4 class="time">新闻|2030年09月29日</h4>
                    <h3 class="theme">未来发布2031年可持续发展报告</h3>
                </div>
            </el-col>
            <el-col :span="10" offset="2">
                <div class="wall2">
                    <div class="para">
                        <h4 class="time2">新闻|2030年09月29日</h4>
                        <p class="theme2">未来发布2031年可持续发展报告</p>
                    </div>
                    <div class="para">
                        <h4 class="time2">新闻|2030年09月29日</h4>
                        <p class="theme2">未来发布2031年可持续发展报告</p>
                    </div>
                     <div class="para">
                        <h4 class="time2">新闻|2030年09月29日</h4>
                        <p class="theme2">未来发布2031年可持续发展报告</p>
                    </div>
                     <div class="para">
                        <h4 class="time2">新闻|2030年09月29日</h4>
                         <p class="theme2">未来发布2031年可持续发展报告</p>
                    </div>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            url_news: require("../../assets/dynamic/news.jpg"),
        }
    }
}
</script>

<style scoped>
.news{
    width: 1200px;
}
h2{
    margin-top:30px;
    margin-bottom: 30px;
}

div.wall{
    position: relative;
    width: 380px;
    height: 500px;
    background-color: rgb(163, 198, 219);
    border-radius: 10px;
}
div.wall2{
    position: flex;
    flex-direction: column;
    width: 380px;
    height: 500px;
}
div.para{
    position: relative;
    margin-bottom: 30px;
}

img{
    width: 380px;
    height: 230px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
h4.time{
    position: absolute;
    left:30px;
    top:260px;
}
h4.time2{
    font-family: 'Courier New', Courier, monospace;
    float: left;
    clear: both;

}
h3.theme{
    position: absolute;
    left:30px;
    top:290px;
}
h3.theme2{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    float: left;
    clear: both;
    padding-top:20px;
    padding-bottom: 50px;
}
p.theme2{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 22px;
    float: left;
    clear: both;
    padding-top:20px;
    padding-bottom: 50px;
}
p.theme2:hover{
    text-decoration: underline;
}

</style>
