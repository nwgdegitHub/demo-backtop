<template>
  <div id="app">
    <div class="nav">
      <el-button type="primary" @click="goTo('/backtop1')">主要按钮1</el-button>
      <el-button type="primary" @click="goTo('/backtop2')">主要按钮2</el-button>
      <el-button type="primary" @click="goTo('/login')">去登录</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  props:{},
  data(){
    return{
      
    }
  },
  methods:{
    goTo(path){
      console.log(path)
      this.$router.push(path)
    }
  }
}
</script>

<style>

</style>
