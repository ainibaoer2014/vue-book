<template>
    <div>
      <!--keep-alive缓存页面-->
        <keep-alive>
          <!--transition 动画-->
          <transition name="trans">
            <router-view class="view">
            </router-view>
          </transition>
        </keep-alive>
      <Tab></Tab>
    </div>
</template>
<style scoped lang="less">
  /*每个组件都保管者自己的样式*/
  .trans-enter{
    transform: translate(100%);
  }
  .trans-enter-active{
    transition:0.3s linear;
  }
  .trans-leave-active{
    transform: translate(-100%);
    transition:0.3s linear;
  }
  .view{
    position: absolute;
    width: 100%;
    top:0;
    left: 0;
    bottom: 65px;
  }
</style>
<script>
  import Tab from 'components/Tab';
    export default {
        components: {Tab}
    }
</script>
