const express = require('express')
const uwuifier = require("uwuify");
const cors = require('cors')
// import express from 'express'
const app = express()
const port = 3000
// import { Uwuifier } from 'Uwuifier';

app.use(cors())

app.get('/', (req, res) => {
    user_query = req.query.query
    const uwuifier = require('uwuify')
    const uwuify = new uwuifier()
    // console.log(uwuify.uwuify('string to be uwuified'))
    // res.send('Hello World!')
    res.send({ "result": uwuify.uwuify(user_query)})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


