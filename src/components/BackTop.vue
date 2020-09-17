<template>
  <div class="pages-content-scroll">
    <el-backtop target=".pages-content-scroll"></el-backtop>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'BackTop',
  components: {

  },
  methods:{

  }
}
</script>

<style>
  .pages-content-scroll{
    /* 必须撑满 */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
  }
</style>
