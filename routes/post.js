const express = require('express');
const routes = express.Router();
const path = require('path');
const postcontrollers = require('../controllers/postcontrollers');
const posts = require('../module/post');

console.log('from post')
routes.get('/',postcontrollers.posts);
routes.post("/addpostssdata",posts.uplodeImage,postcontrollers.addpostssdata);
routes.get("/viewpost",postcontrollers.viewpost);
routes.get("/updaterec/:id",postcontrollers.updaterec);
routes.get("/deleterec/:id",postcontrollers.deleterec);
routes.post("/editstud",posts.uplodeImage,postcontrollers.editstud);


module.exports = routes;
