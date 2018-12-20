<template>
  <div id="testInput">
    <input type="text" v-focus>
    <div>aaaaaaaaaaaaaa</div>
  </div>
</template>


<script>
  Vue.directive('focus',{
    inserted:function (el) {
      //聚焦元素
      el.focus();
    }
  })

  new Vue({
    el:'#testInput'
  })

  export default {

  }
</script>
