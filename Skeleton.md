1. Initialize project and structure, mean init and src folder with index.js file 
2. Setup dev environment meaning npm i -D nodemon and in package.js change "test" to "start": "nodemon src/index.js" and we test the server
3. Install and setup express meaning npm i express
    * 3.1. add static middleware
    * 3.2. body parser
    * 3.3 add routes
4. Add static files and resources, meaning add css and images 
5. Add views folder with ready htmls meaning in src create new folder views 
6. Add express-handlebarse view engine
    * 6.1 Install, meaning npm i express-handlebars
    * 6.2 Add to express
    * 6.3 Config extension
    * 6.4 Config views folder (only for src)
    * 6.5 Add main layout, meaning in folder views create new folder layouts and create file main.hbs 
    * 6.6 Add partials folder, meaning in views create new folder partials 
    * 6.7 Render home page in routes.js
    * 6.8 fix styles and images
    * 6.9 fix header navigation to home, meanin change paths in main.hbs
7. Add controllers folder with home controller, meaning in src creat folder controller
8. Connect database
    * 8.1 install mongoose, meaning npm i mongoose
    * 8.2 connect database
9. Authentication 
    * 9.1 Add user controller
    * 9.2 Add controller to routes
    * 9.3 Render login page, and create in views folder users and move login.html there 
    * 9.4 fix header navigation to login, register and logout, meaning change paths in main.hbs
    * 9.5 render register page 
10. Add user model, meaning in src create folder modules and create file user.js
11. Add user manager, meaning in src create folder managers and crete file userManager.js
    * 11.1 Add login and register methods (empty)
    * 11.2 Require in user controller