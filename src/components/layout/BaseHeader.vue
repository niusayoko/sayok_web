<template>
    <el-row :gutter="0">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#ffd04b">

        <el-col :span="1" class="logo" @click.native="toHome">
          <div class="grid-content bg-purple" style="color:white;font-weight: bold">JCI</div>
        </el-col>
        <el-menu-item index="1">产品</el-menu-item>
        <el-menu-item index="2">组件</el-menu-item>
        <el-menu-item index="3">需求</el-menu-item>
        <el-menu-item index="4">BUG</el-menu-item>
        <el-menu-item index="5">变更</el-menu-item>
        <el-menu-item index="6">提测</el-menu-item>
        <el-menu-item index="7">上线</el-menu-item>
        <el-submenu index="8">
          <template slot="title">代码</template>
          <el-menu-item index="8-1">仓库</el-menu-item>
          <el-menu-item index="8-2">审批</el-menu-item>
          <el-menu-item index="8-3">产品线</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-row>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.axios.get('/user?ID=12345')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
      },
      toHome(){
        console.log("a")
        this.$router.push({path:'/home'})
      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
    padding: 0px;
  }
  .logo{
    width: 60px;
    cursor: pointer;
  }
</style>
