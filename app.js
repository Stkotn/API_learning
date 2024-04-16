const express = require('express')
const app = express()
const port = 3000
let API_postman = {} //通常は複数形。

app.use(express.json())

app.post('/API_postman', (req, res) => {
  API_postman = req.body

  if (!(API_postman.name && API_postman.text)) {
    return res.json({
      "ok": false,
      "error": "invalid parameter"
    })
  }
  
  res.json({
    "ok": true,
    "API_postman": API_postman
  })
})

app.get("/API_postman", (req, res) => {
  res.json({
    "ok": true,
    "API_postman": [
      API_postman
    ]
})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})