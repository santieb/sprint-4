const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  console.log('request /');
  res.json('API! en slash')
});

app.get('/api', (req, res) => {
  res.json('¡Esta es información obtenida desde tu API!')
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en puerto: ${port}`)
});
