/* Use Express */

const express = require('express');
const app = express(); // All powers of express goes to app


/* Middleware Creation */

/* app.use(function(req,res,next){
    console.log("Hello From Middleware 1");
    next();
});

app.use(function(req,res,next){
    console.log("Hello From Middleware 1");
    next();
});

 */

/* EJS Setup */

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static('./public'))

/* Routes Creation */

app.get('/',function (req, res) {
  res.render('index', {age:12});
})

app.get('/contact',function (req, res) {
  res.render('contact', {name: "Shahe Alam"});
})

/* app.get('/profile',function (req, res) {
  res.send('Your Profile Is Created and Hello From Profile')
})

app.get('/profile/harsh',function (req, res) {
  res.send('Hello From Harsh')
})

 */

/*   Dynamic Routing */
  app.get('/profile/:user_name',function (req, res) {
  res.send(`Hello From ${req.params.user_name}`)
})

/* Error Handling */

app.get('/error',function (req, res, next) {
  throw Error("Something Went Wrong");
})

app.use(
function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
)

app.listen(3000);