const express = require('express');
const routes = express.Router();

const leituraController = require("../controllers/leiturasController.js");

routes.post('/leituras', leituraController.insert);

module.exports= routes;