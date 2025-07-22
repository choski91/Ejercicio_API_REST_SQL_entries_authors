const express = require('express');

// Rutas 
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

router.get('/', entriesController.getEntries);
// router.post('/', entriesController.createEntry);


module.exports = router;
