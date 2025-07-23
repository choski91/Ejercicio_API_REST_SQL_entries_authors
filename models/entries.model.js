const pool = require('../config/db_pgsql');
const queries = require('../queries/entries.queries') 

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
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
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
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
const createEntry = async (entry) => {
    const { title, content, id_author, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, id_author, category])
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
const updateEntries = async (entry) => {
    const { title, content, id_author, category } = author;
    let client;

    try {
        client = await pool.connect();
        await client.query(queries.updateEntries, [title, content, id_author, category]);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }

    return email;
};

//DELETE
const deleteEntry = async (email) => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.deleteEntry, [email]);
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }

    return result.rowCount;
};




const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    updateEntries,
    deleteEntry
    
}

module.exports = entries;
