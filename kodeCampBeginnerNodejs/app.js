var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { default: mongoose } = require('mongoose');

var app = express(); 

let todo = [];

app.get("/", (req, res) => {
  console.log("Hello");
}, (res, req) => {
  res.send(todo);
})

app.post("/todo", (req, res) => {
  const id = Math.floor(Math.random() * 10000);
  const title = req.body.title;
  const description = req.body.description;

  todo.push({
    id,
    title,
    description,
    isDone: false
  });

  res.status(201).send({
    message: "Todo added successfully",
    todo
  })
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
