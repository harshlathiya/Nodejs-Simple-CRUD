const express = require('express');
const routes = express.Router();
const admincontrollers = require("../controllers/admincontrollers")
const path = require('path');
const Student = require('../module/student')
console.log("from Router")
routes.get("/",admincontrollers.adddata);
routes.get("/viewdata",admincontrollers.viewdata);
routes.get("/updaterec/:id",admincontrollers.updaterec);
routes.get("/deleterec/:id",admincontrollers.deleterec);
routes.post("/addssdata",Student.uplodeImage,admincontrollers.addssdata);
routes.post("/editstud",Student.uplodeImage,admincontrollers.editstud);

module.exports = routes;

