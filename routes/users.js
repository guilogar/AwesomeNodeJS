'use strict';

const express = require('express');
const router = express.Router();

const User = require('../database/User');
const sequelize = require('../database/sequelize');

router.get('/users', async (req, res) => {
    await sequelize.sync();
    res.status(200).send({
        msg: 'got it!',
        users: await User.findAll()
    });
});

router.post('/users', async (req, res) => {
    res.status(200).send({
        msg: 'created!'
    });
});

router.put('/users', async (req, res) => {
    res.status(200).send({
        msg: 'updated!'
    });
});

router.delete('/users', async (req, res) => {
    try
    {
        await sequelize.sync();
        await User.destroy({
            where: {},
            truncate: true
        });
        res.status(200).send({
            msg: 'deleted!'
        });
    } catch(ex)
    {
        res.status(500).send({
            msg: ex
        });
    }
});

module.exports = router;