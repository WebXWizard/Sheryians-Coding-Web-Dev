const express = require('express')
const app = express()

app.use(function(req, res, next){
    console.log("Hello From Middleware");
    next();
})

app.use(function(req, res, next){
    console.log("Hello From Middleware 2");
    next();
})

/* get( route, function) */
app.get('/',function (req, res) {
  res.send('Server Is Created and Hello!! From Home')
})

app.get('/profile',function (req, res) {
  res.send('Your Profile Is Created and Hello From Profile')
})

app.listen(3000)