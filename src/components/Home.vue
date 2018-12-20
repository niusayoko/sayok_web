<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <v-main></v-main>
    </el-main>
  </el-container>
</template>

<script>
import vHeader from './layout/BaseHeader.vue';
import vMainBak from './layout/BaseMainBak.vue';
import vMain from './layout/BaseMain.vue';
import vFooter from './layout/BaseFooter.vue';
export default {
  components:{
    vHeader,vMain,vFooter,vMainBak
  }
}
</script>

<style>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  .el-footer {
    color: white;
    background-color: rgb(84, 92, 100)
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
