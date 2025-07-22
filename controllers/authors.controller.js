const author = require('../models/authors.model'); // importo el model BBDD

//GET http://localhost:3000/api/authors
//GET  http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es 

const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorByEmail(req.query.email);
    }
    else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors); // [] con las entries encontradas
}

//POST http://localhost:3000/api/authors/

const createAuthors = async (req, res) => {
    const newAuthor = req.body; 
    const response = await author.createAuthor(newAuthor);
    res.status(201).json({
        "usuario creado": response,
        data: newAuthor
    });
}

//PUT http://localhost:3000/api/authors/ 

const editAuthor = (req, res) => {
    res.status(200).send("usuario actualizado");
}

//DELETE http://localhost:3000/api/authors/ 

const deleteAuthor = async (req, res) => {
    const { email } = req.body;

    try {
        await author.deleteAuthor(email);
        res.status(200).json({
            message: `Se ha borrado ${email}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error al eliminar autor",
            error: err.message
        });
    }
};


module.exports = {
    getAuthors,
    createAuthors,
    editAuthor,
    deleteAuthor
};
