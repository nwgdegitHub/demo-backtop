<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="phone">
        <el-input placeholder="请输入手机号" v-model="ruleForm.phone">
          <i slot="prefix" class="el-icon-phone"></i>
        </el-input>
      </el-form-item>

      <el-form-item prop="code">
        <el-row :gutter="18">
          <el-col :span="18">
            <el-input placeholder="请输入验证码" v-model="ruleForm.code">
              <i slot="prefix" class="el-icon-tickets"></i>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary"
            style="100%"
            @click="send"
            :disabled="disabled"
            >{{btnText}}
          </el-button>
          </el-col>
        </el-row>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="100%" @click="phonelogin">去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'PhoneLogin',
  components: {

  },
  props:{
    ruleForm:{
      type:Object,
      required:true
    },
    countDown:{
      type:Number,
      default:60
    }
  },
  data(){

    let checkPhone = (rule,value,callback)=>{
      if(!value){
        return callback(new Error('手机号不能为空'))
      }
      else{
        let reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/
        if(reg.test(value)){
          callback()
        }
        else{
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }

    return {
      rules:{
        phone:[
          {validator:checkPhone,trigger:'change'}
        ],
        code:[
          {required:true,message:'验证码不能为空',trigger:'blur'}
        ]
      },
      disabled:false,
      btnText:'发送',
      time:0
    }
  },
  methods:{
    login(){
      this.$refs.ruleForm.validate((valid)=>{
        if(valid){
          this.$emit("submit")
        }
        else{
          this.$emit("errorHandle")
        }
      })
    },
    send(){
      //1.手机号必须正确
      this.$refs.ruleForm.validateField('phone',errorMessage =>{

        if(errorMessage){
          this.$message(errorMessage)
        }else{
          //进入倒计时
          //开始计时
          //按钮不可用
          //倒计时结束 按钮恢复可用 按钮文字恢复 重置倒计时值
          //倒计时过程 按钮显示剩余秒数

          let timer = setInterval(()=>{
            this.time--
            this.btnText = `${this.time}s后重新发送`
            this.disabled = true
            if(this.time===0){
              this.disabled = false
              this.btnText = '重新发送'
              this.time = this.countDown
              clearInterval(timer)
            }
          },1000)
          this.$emit("startSend")
        }
      })
    },
    phonelogin(){
      this.$refs.ruleForm.validate((valid)=>{
        if(valid){
          this.$emit("submit")
        }
        else{
          this.$emit("errorHandle")
        }
      })
    }
  },
  mounted(){
    this.time = this.countDown
  }
}
</script>

<style>

</style>
