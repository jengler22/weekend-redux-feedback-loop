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