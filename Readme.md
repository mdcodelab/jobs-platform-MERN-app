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

command: npx nodemon server.js
2. middleware folder:
- not-found.js return 404
- error-handler.js return 500, 4 params (the first is error), place it last,
 eventually place it with mongoose errors, showcase with async errors






