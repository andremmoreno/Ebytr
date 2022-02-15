const express = require('express');
const rescue = require('express-rescue');
const getAll = require('./getAll');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(getAll));
router.post('/', rescue(create));

module.exports = router;