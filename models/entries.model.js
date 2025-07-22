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


const entries = {
    getEntriesByEmail,
    getAllEntries,
    // createEntry,
    //deleteEntry
    //updateEntry
}

module.exports = entries;
