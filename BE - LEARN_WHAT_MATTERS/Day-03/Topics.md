 Express.js - Learn What Matters : Mastering the Framework

1. Node Vs Express, What is the real Deal ? ✅
   Node is main thing which gives power to create server (HTTP) but we can make server using express bcz it is easy to use

2. What is Express.js ? ✅
   Package available in npm used to create server and use its functionality as Routing, Server Side Management and Behind the scene - HTTP use

3. Why Express Js ? ✅
   HTTP is difficult to use but express makes this easier

4. Routing and Routes - ✅
   Process of creating routes - Navigation
   /profile - routes

5. Middleware ✅
   Function used before every routes, first it run
   app.use() - middleware 
   req(data related to user), res(data related to server which send to user) and next(push to next routes bcz middleware jam the routes)

6. Request and Response ✅
   req - All data related to user requests as like - location, deviceInfo and other things.
   res - Controls on basis from which we send response from server.
   next - is just a push so that our req moves to next thing which should be executed.

7. Route Parameters ✅
   to make any route dynamic you can use : at the place where you want to make it dynamic and for access - req.params

   Example -
   /profile/harsh
   /profile/harshita
   /profile/harsha
   /profile/ankit

   /profile/:user_name - routing 
   req.params.user_name - for access

8. Dynamic Routing ✅

9. Template Engines ✅
   Convert style of markup to html
   Example - pug, handlebars, ejs, jade, etc.

10. EJS Setup ✅ 
    EJS is HTML with superpowers - very very similar to HTML
    Install ejs - npm i ejs
    configure ejs - app.set('view engine', 'ejs');
    create a folder - views
    create ejs files in views folder
    render instead of send

    <%= xyz %> - dynamic value create

11. Static Files ✅     
    images, stylesheet, frontend Javascript 

    Setup Static Files
    create a folder - public
    create three folder inside public - images, stylesheets, javascripts
    configure the express static in scripts.js file
    understand the path

12. HTTP Methods - GET and POST ✅

13. Error Handling ✅
