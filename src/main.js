import Vue from 'vue'
//vue-cli脚手架 帮我们将组件封装成.vue文件
import App from './App.vue'
import router from './router'
import './assets/index.less';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload);
import VueScroller from 'vue-scroller';
Vue.use(VueScroller);//引用这个组件后 页面多一个全局组件 scroller
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  //runtime+compiler  runtime only(不支持template写法)
  //template: '<div>hello world</div>',
  //runtime only 基于.vue文件
  /*render(h){ //只针对于根元素
    console.log(h(App));
    return h(App)
  },*/
  ...App,//直接将组件结构 放在当前实例中
  //components: { App }
})
