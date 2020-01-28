var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')
// Creacion
router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado);

//Lectura

router.get('/', peliculasController.listado);

//Detalle

router.get("/:id", peliculasController.detalle);

//Actualizacion
router.get("/editar/:id", peliculasController.editar);

router.post("/editar/:id", peliculasController.actualizar)

//Borrado

router.post("/borrar/:id", peliculasController.borrar)
module.exports = router;