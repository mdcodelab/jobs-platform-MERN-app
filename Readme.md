C L I E N T
- install normalize css and import it into Index.js before App.css
- establish global css styles

2. Home page

3. Error Page, Register page

4. setup global context

5. setup reducer.js

6. setup actions:
- DISPLAY_ALERT
-CLEAR_ALERT



S E R V E R
1. basic package.json structure:
"scripts": {
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.6.2"
  }
}

command: npx nodemon server.js /npm start
2. middleware folder:
- not-found.js return 404
- error-handler.js return 500, 4 params (the first is error), place it last,
 eventually place it with mongoose errors, showcase with async errors

3. create .env file

4. create db folder, connectDB file.

5. create controllers folder, authController.js and functions, export {register, login, updateUser}

6. create routes folder, authRoutes.js, setup express router, import functions form authController.js

7. same thing for jobs: jobsController.js (and functions: getAllJobs, createJob, updateJob, deleteJob) and
jobsRoutes.js

8. test the routes on insomnia: http://localhost:5000/api/v1/auth/(register, login or updateUser)
and http://localhost:5000/api/v1/jobs and http://localhost:5000/api/v1/stats etc.

9. model folder, user model - user.js, setup schema

