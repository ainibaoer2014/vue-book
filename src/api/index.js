//前端获取数据的接口API
//1.引入axios  缺点：不支持jsonp 需要下载第三方jsonp库
import axios from 'axios';

export function getSliders() {
  return axios.get('/api/slider');
}

export function getHot() {
  return axios.get('/api/hot');
}

export function getBook() {
  return axios.get('/api/book');
}

//添加图书 需要传递上传的数据
export function addBook(data) {
  return axios.post('/api/book',data);
}

//删除图书
export function removeBook(id) {
  return axios.delete('/api/book?id='+id);
}
