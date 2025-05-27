const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const servicesRoutes = require('./routes/services');
const statusRoutes = require('./routes/status');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/services', servicesRoutes);
app.use('/api/status', statusRoutes);

app.listen(PORT, () => {
  console.log(`✅ Serveur en écoute sur http://localhost:${PORT}`);
});

module.exports = app;