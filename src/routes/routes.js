const express = require('express');
const routes = express.Router();

const leiturasController = require("../controllers/leiturasController.js");

routes.post('/leituras', leiturasController.insert);

routes.get('/leituras', leiturasController.index);

routes.get('/leituras/:id',leiturasController.details);

routes.put('/leituras/:id',leiturasController.update);

routes.delete('/leituras/:id',leiturasController.delete);

module.exports= routes;