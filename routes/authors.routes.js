const authorsController = require("../controllers/authors.controller");
const express = require('express');
const router = express.Router();

// Rutas 
router.get('/', authorsController.getAuthors);
router.post('/', authorsController.createAuthors);
router.put('/', authorsController.editAuthor);
router.delete('/', authorsController.deleteAuthor)



module.exports = router;