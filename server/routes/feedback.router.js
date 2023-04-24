const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//GET Request
router.get('/', (req, res) => {
    console.log('In GET request');
    let queryText = 'SELECT * from "feedback"';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

// POST request
router.post('/', (req, res) => {
    console.log('In POST request');
    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    let { feeling, understanding, support, comments } = req.body;
    pool.query(queryText, [feeling, understanding, support, comments]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});
