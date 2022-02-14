var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');  //mysql 모듈 호출

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const dbInfo = {    //db정보 객체로 설정
  host:'xxx.xxx.xxx.xxxx'
  ,user:'xxxx'
  ,password:'xxxx'
  ,database:'xxxx'
}

mysql.createConnection(dbInfo).connect((err)=>{ //db 커넥션 연결 확인
  if(err) {
    console.log("mysql connect error "+err);
  } else {
    console.log("mysql connect success ");
  }
})