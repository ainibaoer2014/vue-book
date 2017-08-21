<template>
    <div>
      <m-header title="书城"></m-header>
      <!--如果一个组件 过于庞大 导致难以维护，
        轮播图组件也可能复用
      -->
      <!--不能直接渲染slider 可能数据没过来 slider就渲染完了 导致轮播图不能使用-->
      <div v-if="sliders.length">
        <Slider :data="sliders"></Slider>
      </div>
      <h3>最新上架</h3>
      <ul class="hot">
        <li v-for="hot in hots">
          <img :src="hot.bookCover" alt="">
          <span>{{hot.bookName}}</span>
        </li>
      </ul>
      <Loading v-if="isLoading"></Loading>
    </div>
</template>
<style scoped lang="less">
  h3{
    color: #666;
    padding-left:5%;
    margin:10px 0;
    font-weight:normal;
  }
   .hot{
     display: flex;
     flex-wrap: wrap;
     li{
       width: 33.33%;
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-bottom:10px;
       img{
         width: 100%;
         margin-bottom:10px;
       }
     }
   }
</style>
<script>
  import {getSliders,getHot} from 'api';
  import Slider from 'components/Slider';
  import Loading from 'components/Loading';
  import MHeader from 'components/MHeader';
  export default {
        data() {
            return {
              sliders:[],
              hots:[],
              isLoading:true
            }
        },
        created(){
           getSliders().then(res=>{
             this.sliders=res.data;
           }).catch(err=>{
             console.log(err);
           });
           getHot().then(res=>{
             this.hots=res.data;
             //数据加载完成 隐藏loading组件
             this.isLoading=false;
           })
        },
        computed: {},
        components: {Slider,Loading,MHeader},
        methods: {}
    }
</script>
