const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos del build de Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Para cualquier ruta no conocida, devolver el index.html (Single Page App)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Puerto de Railway o local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
