const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const services = [
    { id: 1, name: 'Hébergement Cloud' },
    { id: 2, name: 'Audit de sécurité' },
    { id: 3, name: 'Infogérance DevOps' }
  ];
  res.json(services);
});

module.exports = router;