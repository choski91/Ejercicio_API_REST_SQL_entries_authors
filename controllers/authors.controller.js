const author = require('../models/authors.model'); // importo el model BBDD



//GET http://localhost:3000/api/authors 
//GET  http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es 
//POST http://localhost:3000/api/authors/
//PUT http://localhost:3000/api/authors/ 
//DELETE http://localhost:3000/api/authors/ 


module.exports = {
    getEntries,
    // createEntry,
    //deleteEntry, --> DELETE
    //updateEntry --> PUT
}
