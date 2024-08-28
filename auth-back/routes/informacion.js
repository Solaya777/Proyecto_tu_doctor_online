const router = require('express').Router();
const { getInformacion, createInformacion } = require('../controllers/informacionController');

router.get('/', getInformacion);
router.post('/', createInformacion);

module.exports = router;
