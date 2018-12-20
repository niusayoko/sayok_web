<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-container>
      <el-aside><v-sidebar></v-sidebar></el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>

  import vHeader from '../layout/BaseHeader.vue';
  import vSidebar from '../layout/BaseSidebar.vue';
  export default {
    components:{
      vHeader,vSidebar
    }
  }
</script>

<style scoped>
  el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > #app > .el-container{
    height: 100%;
  }

  .el-container{
    height: 100%;
  }


</style>
