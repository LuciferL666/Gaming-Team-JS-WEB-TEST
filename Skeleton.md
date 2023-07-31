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
7. Add controllers folder with home controller, meaning in src creat folder controller
8. Connect database
    * 8.1 install mongoose, meaning npm i mongoose
    * 8.2 connect database