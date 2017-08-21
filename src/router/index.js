import Vue from 'vue'
import Router from 'vue-router'
import Home from 'containers/Home';
import List from 'containers/List';
import Collect from 'containers/Collect';
import Add from 'containers/Add';

Vue.use(Router) //router是vue的一个插件 需要use 才能生效

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/collect',
      component:Collect
    },
    {
      path:'/add',
      component:Add
    },
    {
      /*404路由  访问不存在 直接跳转*/
      path:'*',
      redirect:'/home'
    }
  ],
  linkActiveClass:'active' //设置选中的样式
})
