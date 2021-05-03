const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json('ini home')
})

app.get('/persegi', (req, res) => {
  var hasil = req.query.l * req.query.p
  res.json(hasil);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})