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
12. Modify login and register forms, meaning put correct data in login.hbs and register.hbs
13. Add Login and register post actions
14. Implement user manager login and register
    * 14.1 Add unique for username
    * 14.2 Validate repeat password
    * 14.3 Validate if user already exists
15. Hash password
    * 15.1 install bcrypt, meaning npm i bcrypt
    * 15.2 hash password, in user model user.js
16. Login
    * 16.1 Find user by email
    * 16.2 Validate password with hash
17. Generate jwt token
    * 17.1 Install jsonwebtoken, meaning npm i jsonwebtoken
    * 17.2 Promisify jsonwebtoken, meaning in src create folder lib with file jwt.js
    * 17.3 Generate token in manager.login
    * 17.4 Create secret
18. Return token in cookie
    * 18.1 Install cookie parser, meaning npm i cookie-parser
    * 18.2 Config cookie parser, meaning in index.js require
    * 18.3 Set cookie with token, meaning in userController to set cookie after token
19. Logout, meaning in userController
20. Authentication middleware, meaning create folder in src middlewares with file authMiddleware.js
    * 20.1 create base middleware
    * 20.2 use middleware meaning in index.js import middleware
    * 20.3 Implement auth middleware
    * 20.4 create in src folder config for SECRET
    * 20.5 attach decoded token to request
    * 20.6 handle invalid token
21. Authorization middleware
22. Dynamic navigation
    * 22.1 add conditional in main layout
    * 22.2 add res locals, in authMiddleware
23. Error handling
    * 23.1 Add 404 page fix to hbs change static if its need it and put it in file homeController, and routes.js
        * redirect missing route to 404
    * 23.2 add global error handler (optional), meaning in folder middleware create file errorHandlerMiddleware
24. Show error notifications
    * 24.1 Add error container to main layout
    * 24.2 Show error container conditionaly
    * 24.3 pass error to render
    * 24.4 optionally error message extractor, meaning in src create folder utils and inside file errorHelpers.js
    * 24.5 add local error handler
25. Automatically login after registration
26. Creating gameSchema, meaning in folder modules crate file Game.js
27. Create folder games in view and put create.html inside
    * delete all accept main in create.html fill date and make it to hbs 
28. Setup create game 
    * 28.1 in folder controllers create file gameController
    * 28.2 fix the path in main.hbs
    * 29.3 setup router in routes.js
29. Create router post for create game
    * 29.1 create gameManager file in folder managers and need to call it in gameController
    * 29.2 remove router for 404 
    * 29.3 correct in folder modules file game.js
30. Get owner of the game from photoController.js from const gameData

