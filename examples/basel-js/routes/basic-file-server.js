const fs = require('fs')
const path = require('path')

module.exports = function (req, res, next) {
  fs.createReadStream(path.join(process.cwd(), req.url))
    .on('error', () => res.status(404).send('not here'))
    .pipe(res)
};