<template>
    <div>
      <m-header title="添加页"></m-header>
      <div class="add">
        <div class="group">
          <label for="bookName">书名</label>
          <input type="text" id="bookName" placeholder="请输入书名" v-model="book.bookName">
        </div>
        <div class="group">
          <label for="bookCover">书名封页</label>
          <input type="text" id="bookCover" placeholder="请输入书的封页" v-model="book.bookCover">
        </div>
        <div class="group">
          <label for="content">书名详情</label>
          <input type="text" id="content" placeholder="请输入书的详细内容" v-model="book.content">
        </div>
        <div class="group">
          <button @click="add">添加图书</button>
        </div>
      </div>
    </div>
</template>
<style scoped lang="less">
  .add{
    padding:0 20px;
    display: flex;
    flex-direction: column;
    .group{
      display: flex;
      flex-direction: column;
      margin-bottom:10px;
      label{
        font-size:18px;
        line-height:25px;
        margin-bottom:5px;
        color: #333;
      }
      input{
        border: 1px solid #777;
        height: 30px;
        border-radius:5px;
        padding:0 10px;
        opacity:0.5;
      }
      button{
        height: 35px;
        border-radius:5px;
        border:none;
        font-size:18px;
      }
    }
  }
</style>
<script>
    import MHeader from 'components/MHeader';
    import {addBook} from 'api';
    export default {
        data() {
            return {
              book:{
                bookName:'',
                bookCover:'',
                content:''
              }
            }
        },
        components: {MHeader},
        methods: {
          add(){
            addBook(this.book).then(res=>{
              //添加成功后的跳转到列表页
              this.$router.push('/list');
            })
          }
        }
    }
</script>
