<template>
    <div>
        <el-form>
            <div class="form">
            <p class="loginTip"><strong>Future 账号登录</strong></p>
            <el-form-item>
                <el-row>
                    <el-col :span="10" offset="2">
                        <el-button type="success">登录</el-button>
                    </el-col>
                    <el-col :span="10">
                        <el-button type="success">注册</el-button>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item>
                <el-row>
                    <el-col :span="10" offset="2">
                        <el-button type="text" class="forget">忘记密码？</el-button>
                    </el-col>
                </el-row>
            </el-form-item>

            </div>
        </el-form>
    </div>

</template>

<script>
    export default {
       
  }
    
</script>

<style scoped>
.form{
    background-color: white;
    /*border-style: ridge;*/
   /* border-width:2px;*/
    border-color: rgb(209, 206, 206);
}

.loginTip {
    font-size: 13px;
    text-align: left;
    margin-bottom: 20px;
    padding: 5px 20px;
    background-color: rgb(163, 198, 219);
}

.el-button {
    background-color: rgb(163, 198, 219);
    color: black;
    border-color: gray;
}
.el-button:hover{
    transform: scale(1.2);
}

.forget {
    text-align: left;
    background-color: white;
    color: red;
    border-color: white;
}


</style>