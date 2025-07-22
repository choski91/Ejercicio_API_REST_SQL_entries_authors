const pool = require('../config/db_pgsql');
const queries = require('../queries/authors.queries') 

// GET
const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


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

//CREATE
const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor,[name, surname, email, image])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updateAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client;

    try {
        client = await pool.connect();
        await client.query(queries.updateAuthor, [name, surname, email, image]);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }

    return email;
};

//DELETE
const deleteAuthor = async (email) => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.deleteAuthor, [email]);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }

    return result.rowCount;
};


const authors = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
};

module.exports = authors;
