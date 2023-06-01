const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configura el middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mmeD10',
    database: 'dblogin',
});

// Establece la conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Ruta para guardar una nueva tarea en la base de datos
app.post('/tasks', (req, res) => {
    const task = req.body;
    const query = 'INSERT INTO tasks (title, content, complete) VALUES (?, ?, ?)';
    connection.query(query, [task.title, task.content, task.complete], (err, result) => {
        if (err) {
            console.error('Error al guardar la tarea en la base de datos: ', err);
            res.status(500).send('Error al guardar la tarea en la base de datos');
            return;
        }
        res.status(201).send('Tarea guardada exitosamente');
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});