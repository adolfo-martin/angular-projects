const express = require('express');
const cors = require('cors');
const { empleados } = require('./empleados.js');

const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  setTimeout(next, 1000);
});

app.get('/empleados', (req, res) => {
  res.json(empleados);
});

app.get('/empleados/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const empleado = empleados.find(e => e.dni === id);
  if (empleado) {
    res.json(empleado);
  } else {
    res.status(404).send('Empleado not found');
  }
});

app.get('/empleados/categoria/:categoria', (req, res) => {
  const categoria = req.params.categoria.toLowerCase();
  const empleadosPorCategoria = empleados.filter(e => e.categoria.toLowerCase() === categoria);
  res.json(empleadosPorCategoria);
});

app.get('/empleados/genero/:genero', (req, res) => {
  const genero = req.params.genero.toLowerCase();
  const empleadosPorGenero = empleados.filter(e => e.genero.toLowerCase() === genero);
  res.json(empleadosPorGenero);
});

app.get('/empleados/departamento/:departamento', (req, res) => {
  if (Math.random() < 0.5) {
    res.status(500).send('Internal Server Error');
  } else {
    const departamento = req.params.departamento.toLowerCase();
    const empleadosPorDepartamento = empleados.filter(e => e.categoria.toLowerCase() === departamento);
    res.json(empleadosPorDepartamento);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});