<template>
  <div id="login">
    <h1>普通登录组件</h1>
    <div class="account">
      <account-login
        :rule-form="ruleForm"
         :rules="rules"
         @submit="submit"
         @errorHandle="errorHandle"
      ></account-login>
    </div>

    <h1>短信验证码登录组件</h1>
    <div class="phone">
      <phone-login
        :rule-form="phoneForm"
        :countDown=30
         @startSend="startSend"
         @submit="submit"
         @errorHandle="errorHandle"
      ></phone-login>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {

  },
  data(){
    return{
      ruleForm:{
        username:'',
        password:''
      },
      rules:{
        username:[
          {
            required:true,
            message:'用户名不能为空',
            trigger:'blur'
          },
          {
            min:2,
            max:6,
            message:'用户名在2-6个字符之间',
            trigger:'blur'
          }
        ],
        password:[
          {
            required:true,
            message:'密码不能为空',
            trigger:'blur'
          },
          {
            min:6,
            max:15,
            message:'密码在6-15个字符之间',
            trigger:'blur'
          }
        ]
      },
      phoneForm:{
        phone:'',
        code:''
      }
    }
  },
  methods:{
    submit(){
      this.$message.success("提交成功")
    },
    errorHandle(){
      this.$message("提交失败")
    },
    startSend(){
      //此处可以写发送验证码代码
      this.$message("验证码已发送")
    }
  }
}
</script>

<style>
#login{
  margin-top: 30px;
  margin-left: 30px;
}
  .account ,.phone{
    width: 500px;
  }
</style>
