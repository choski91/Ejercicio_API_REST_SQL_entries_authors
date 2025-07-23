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

//POST http://localhost:3000/api/entries/ 

const createEntry = async (req, res) => {
    const newEntry = req.body; 
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "entry creado": response,
        data: newEntry
    });
}

//PUT http://localhost:3000/api/entries/

const updateEntry = (req, res) => {
    res.status(200).send("entry actualizado");
}

//DELETE http://localhost:3000/api/entries/ 
const deleteEntry = async (req, res) => {
    const { email } = req.body;

    try {
        await entry.deleteEntry(email);
        res.status(200).json({
            message: `Se ha borrado ${email}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error al eliminar entry",
            error: err.message
        });
    }
};


module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry,
}
