const express = require('express');

// Rutas 
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

router.get('/', authorsController.getAuthors);
// router.post('/', entriesController.createEntry);


module.exports = router;