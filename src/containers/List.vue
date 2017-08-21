<template>
    <div>
      <m-header title="列表页"></m-header>
      <scroller :on-refresh="refresh" ref="scroller" class="top">
        <ul class="list">
          <li v-for="book in books">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.content}}</p>
              <button @click="remove(book.id)">删除</button>
            </div>
          </li>
        </ul>
      </scroller>
    </div>
</template>
<style scoped lang="less">
    .list{
       li{
         display: flex;
         border-bottom:1px solid #ccc;
         margin:10px 0;
         img{
           height: 100px;
           margin-bottom:10px;
         }
         div{
           display: flex;
           flex-direction: column;
           margin-left:30px;
           h3{
             color: #666;
           }
           p{
             margin:10px 0;
           }
           button{
             width: 50px;
             height: 30px;
             margin-left:30px;
             border:none;
             background-color: #e9203d;
             color: #fff;
             border-radius:5px;
             letter-spacing: 2px;
           }
         }
         img[lazy='loaded']{
           animation: fadeIn 1s;
         }
         img[lazy='loading']{
           background: url('../assets/loading.gif') no-repeat center;
           background-size: cover;
         }
       }
    }
    .top{
      margin-top: 40px;}
  @keyframes fadeIn {
    from{
      opacity:0;
    }
    to{
      opacity: 1;
    }
  }
</style>
<script>
    import MHeader from 'components/MHeader';
    import {getBook,removeBook} from 'api';
    export default {
        data() {
            return {books:[]}
        },
        created(){
          this.getList();
        },
        components: {MHeader},
        methods:{
          remove(id){
            removeBook(id).then(res=>{
              //前台删除成功后 将此项在页面中删除
              this.books=this.books.filter(item=> item.id!=id);
            });
          },
          refresh(){
            //获取最新的数据
            this.getList();
            //加载数据后获取scroller 调用该方法
            this.$refs.scroller.finishPullToRefresh();
          },
          getList(){
            getBook().then(res=>{
              this.books=res.data;
            });
          }
        }

    }
</script>
