const express = require('express');


const entriesController = require("../controllers/entries.controller");
const router = express.Router();

// Rutas 
router.get('/', entriesController.getEntries);
// router.post('/', entriesController.createEntry);
// router.put('/', entriesController.editEntry);
// router.delete('/', entriesController.deleteEntry);



module.exports = router;
