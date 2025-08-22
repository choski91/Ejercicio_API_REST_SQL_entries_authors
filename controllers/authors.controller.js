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
    res.status(200).json(authors); 
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

const editAuthor = async (req, res) => {
    const updateAuthor = req.body; // { oldEmail, name, surname, email, image }

    try {
        const result = await author.updateAuthor(updateAuthor);

        if (result === 0) {
            return res.status(404).json({
                message: `No se encontró el usuario '${updateAuthor.oldEmail}'`
            });
        }

        res.status(200).json({
            message: `usuario actualizado: ${updateAuthor.oldEmail}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error al actualizar usuario",
            error: err.message
        });
    }
};

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
