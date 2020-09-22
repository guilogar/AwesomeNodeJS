
'use strict';

const express = require('express');
const router = express.Router();

router.get('/basic', function (req, res) {
	res.status(200).send({
        msg: 'got it!'
    });
});

router.post('/basic', function (req, res) {
    res.status(200).send({
        msg: 'created!'
    });
});

router.put('/basic', function (req, res) {
    res.status(200).send({
        msg: 'updated!'
    });
});

router.delete('/basic', function (req, res) {
    res.status(200).send({
        msg: 'deleted!'
    });
});

module.exports = router;