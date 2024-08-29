const router = require('express').Router();
const { getInformacion, createInformacion, updateInformacion, deleteInformacion } = require('../controllers/informacionController');
const authenticate = require('../auth/authenticate');


router.get('/', authenticate, getInformacion);


router.post('/', authenticate, createInformacion);

router.put('/:id', authenticate, updateInformacion); 

router.delete('/:id', authenticate, deleteInformacion); 

module.exports = router;
