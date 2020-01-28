const express = require('express');
const peliculasController = require('../controllers/peliculasController')
const router = express.Router();

//Lectura
router.get('/', peliculasController.listado);

// Creacion
router.get('/crear', peliculasController.crear);
router.post('/crear', peliculasController.guardado);

//Genero
router.get('/genero/:id', peliculasController.infoGeneros);

//Detalle
router.get("/:id", peliculasController.detalle);

//Actualizacion
router.get("/editar/:id", peliculasController.editar);
router.post("/editar/:id", peliculasController.actualizar)

//Borrado
router.post("/borrar/:id", peliculasController.borrar)




module.exports = router;