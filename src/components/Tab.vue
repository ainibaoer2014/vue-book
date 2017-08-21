<template>
    <nav>
      <router-link to="/home">
        <i class="iconfont icon-homepage"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-iconfontxingxing"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-zengjia"></i>
        <span>添加</span>
      </router-link>
    </nav>
</template>
<style scoped lang="less">
 nav{
   height: 60px;
   display: flex;
   width: 100%;
   position: fixed;
   bottom: 0;
   left: 0;
   border-top:1px solid #ccc;
   align-items: center;
   background-color: #fff;
   a{
     i{
       font-size:24px;
     }
     flex:1;
     display: flex;
     flex-direction: column;
     align-items: center;
   }
   .active{
     color: #f30;
   }
 }
</style>
<script>
    export default {
        data() {
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
