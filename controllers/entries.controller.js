const entry = require('../models/entries.model'); // importo el model BBDD


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email

const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//PUT http://localhost:3000/api/entries/ 

//DELETE http://localhost:3000/api/entries/ 


module.exports = {
    getEntries,
    // createEntry,
    //deleteEntry, --> DELETE
    //updateEntry --> PUT
}
