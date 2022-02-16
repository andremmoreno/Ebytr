const express = require('express');
const rescue = require('express-rescue');
const getAll = require('./getAll');
const create = require('./create');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(getAll));
router.post('/', rescue(create));
router.delete('/:id', rescue(remove));

module.exports = router;