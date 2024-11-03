const express = require('express');
const { getUserShips, addShip } = require('../controllers/shipController');
const router = express.Router();

router.get('/:userId', getUserShips);
router.post('/', addShip);

module.exports = router;
