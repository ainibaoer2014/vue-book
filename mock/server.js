//后台只提供接口 前端只调用接口
let http=require('http');
let url=require('url');
let fs=require('fs');
let sliders=require('./sliders');

//读取文件的方法
function read(callback) {
   fs.readFile('./book.json','utf8',function (err,data) {
     data=data.length===0? []:JSON.parse(data);
     callback(data);
   })
}

//写入文件的方法
function write(data,callback) {
  fs.writeFile('./book.json',JSON.stringify(data),callback);
}


http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  let id=query.id;

    if(pathname==='/api/slider'){
       return res.end(JSON.stringify(sliders));
    }

    if(pathname==='/api/hot'){
      read(function (data) {
        //获取最新的6本书
         var books=data.reverse().slice(0,6);
         res.end(JSON.stringify(books));
      });
      return;
    }

//图书的增删改查  使用restful风格
if(pathname==='/api/book'){
  switch (req.method){
    case 'GET':
      read(function (data) {//data代表所有的数据
        res.end(JSON.stringify(data));
      });
      break;
    case 'POST':
      //发过来的请求体 默认是对象格式
      var str='';
      req.on('data',function (data) {
          str+=data;
      });
      req.on('end',function () {
          var book=JSON.parse(str);
          //读取所有的书  获取最后一本书的id
          read(function (books) {
            book.id=books.length>0?parseFloat(books[books.length-1].id)+1:1;
            books.push(book);
            write(books,function () {
              //restful的风格  添加后 返回添加的那一项
              res.end(JSON.stringify(book));
            })
          });
      });
      break;
    case 'DELETE':
      read(function (books) {
        books=books.filter(item=> item.id!=id);
        //restful风格  删除后 返回空对象
        write(books,function () {
          res.end(JSON.stringify({}));
        });
      });
      break;
    case 'PUT':
      break;
  }
}



}).listen(3000);

/*let app=require('express')();
app.listen(3000);
let sliders=require('./sliders');
app.get('/api/slider',function (err,res) {
   res.send(sliders);
});*/
