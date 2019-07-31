<template>
    <div >
        <el-row class="foot">
            <el-col :span="4">
                <div>
                    <h2>关于未来</h2>
                     <ul>
                        <li v-for="link in links_1"
        	                :key="link.key">
                            <a> {{link.link}}</a>
                         </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="4" offset="2">
                 <div>
                    <h2>新闻 & 展会</h2>
                     <ul>
                        <li v-for="link in links_2"
        	                :key="link.key">
        	                 <a> {{link.link}}</a>
                         </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="4" offset="2">
                 <div>
                    <h2>行业洞察</h2>
                     <ul>
                        <li v-for="link in links_3"
        	                :key="link.key">
        	                  <a> {{link.link}}</a>
                         </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="4" offset="2">
                 <div>
                    <h2>技术支持</h2>
                     <ul>
                        <li v-for="link in links_4"
        	                :key="link.key">
        	                 <a> {{link.link}}</a>
                         </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="1" offset="1" class="icon">
                <div>
                    <img :src="url_weibo">
                    <img :src="url_toutiao">
                    <img :src="url_weixin">
                    <img :src="url_zhihu">
                </div>
               
            </el-col>
        </el-row>

        <div class="end">
            <p>© Future 未来技术有限公司 京ICP证030173号</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                links_1:[
		{ key: 0, link: '公司简介' },
        { key: 1, link: '公司治理' },
        { key: 2, link: '管理层信息' },
        { key: 3, link: '网络安全' },
        { key: 4,link:'可持续发展'},
        { key: 5, link: '债券投资者关系' },
        { key: 6, link: '出版物' }
            ],
              links_3:[
		{ key: 0, link: '行业研究' },
        { key: 1, link: '行业展望' },
        { key: 2, link: '热点技术' },
        { key: 3, link: '创新' }
              ],
                links_2:[
		{ key: 0, link: '新闻' },
        { key: 1, link: '展会活动' },
        { key: 2, link: '公司年报' },
        { key: 3, link: '媒体图库' },
		{ key: 4, link: '媒体联系' }
            ],
                links_4:[
		{ key: 0, link: '消费者技术支持' },
        { key: 1, link: '企业技术支持' },
        { key: 2, link: '运营商技术支持' },
        { key: 3, link: '安全通告' }
                  ],

                url_weibo:require("../assets/foot/weibo.png"),
                url_toutiao:require("../assets/foot/toutiao.png"),
                url_weixin:require("../assets/foot/weixin.png"),
                url_zhihu:require("../assets/foot/zhihu.png")
            }
        },
    }
</script>

<style scoped>
.foot{
    position: flex;
    justify-content: center;
    width: 1200px;
    margin: 0 auto;
    padding-top:50px;
}
h2{
    text-align: left;
    color: black;
    /*margin-top:50px;*/
    margin-bottom: 30px;
}
ul {
    list-style-type: none;
    text-align: left;
    line-height: 200%;
    margin-bottom: 30px;
}

a:hover{
    text-decoration:underline;
    color: black;
    font-weight: bolder;
}

div.end{
    position: flex;
    justify-content: center;
    padding-top: 18px;
    height: 50px;
    background-color: gray;
    color: white;
}


img{
    height: 35px;
    width: 35px;
    margin:10px;
    background-color: white;
    border-radius: 16px;   
}
img:hover{
    transform: scale(1.4);
    filter:alpha(Opacity=80);   /*filter 设置平台IE半透明效果样式，值1-100，值越小越透明，设置IE8以前的透明使用*/
    -moz-opacity:0.8;            /*-moz-opacity 对非IE浏览器设置，比如火狐，语法与IE相同*/
    opacity: 0.8;               /*opacity 设置IE半透明效果样式，值0.1-1，值越小越透明，设置IE8以后版本的透明使用*/
}

</style>