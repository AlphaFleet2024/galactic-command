const express = require('express');
const { getUserResources, addResource } = require('../controllers/resourceController');
const router = express.Router();

router.get('/:userId', getUserResources);
router.post('/', addResource);

module.exports = router;
