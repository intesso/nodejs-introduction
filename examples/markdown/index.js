#!/usr/local/bin/node

const path = require('path')
const fs = require('fs')
const serveIndex = require('serve-index')
const marked = require('marked')
const express = require('express')
const app = express()

app.get('/favicon.ico', (req, res) => res.end())

app.use(serveIndex(path.join(process.cwd(), '/'), {icons: true}))

app.use((req, res, next) => {
  let filePath = path.join(process.cwd(), req.url)
  let reqUrl = req.url.toLowerCase()
  if (reqUrl.endsWith('.md') || reqUrl.endsWith('.markdown')) {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) return res.status(400).send(err)
      marked(content, (err, markdown) => {
        if (err) return res.status(400).send(err)
        res.send(markdown)
      })
    })
  } else {
    fs.createReadStream(filePath)
    .on('error', () => res.status(404).send('not found'))
    .pipe(res)
  }
})

app.listen(3000)
