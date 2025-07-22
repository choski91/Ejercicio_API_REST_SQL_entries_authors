const express = require('express');
const app = express();
const port = 3000;

//leer fichero .env
require('dotenv').config();

// Rutas

const entriesRoutes = require("./routes/entries.routes");
const authorsRoutes = require("./routes/authors.routes");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my server!')
});

// Habilitar las rutas - Middleware

app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorsRoutes);

// app.use("*", error404);
// app.use(error404);

  
app.listen(port, () => {

  console.log('serverrunning');
});

module.exports = app; 
