const pool = require('../config/db_pgsql');
const { getAllAuthors, getAuthorByEmail, createAuthor, updateAuthor, deleteAuthor } = require('../queries/authors.queries');
const queries = require('../queries/authors.queries') 

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        console.log(data.rows)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}



const authors = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
};

module.exports = authors;
