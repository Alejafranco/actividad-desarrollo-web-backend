const express = require('express');
const router = express.Router(); 

const _personaController = require('../controllers/personas/personas.controller');

router
  .get("/personas", _personaController.getPersonas)
  .post("/personas", _personaController.createPersonas)
  .get("/reporte", _personaController.creteReportPersonas);


module.exports = router;