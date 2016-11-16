#!/usr/local/bin/node

const express = require('express')
const app = express()

app.use(require('./routes/basic-file-server'))

app.listen(3000)