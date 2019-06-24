const express = require('express')
const bodyParser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0'

// App
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const integerTracker = {}

app.get('/', (req, res) => {
  res.send('Hello cool server')
})

app.post('/', urlencodedParser, (req, res) => {
  const num = req.body.integer
  integerTracker[num] = integerTracker[num] + 1 || 1
  res.send(
    { 
      message: `The number '${num}' was sent ${integerTracker[num]} number of times.`,
      integerTracker
    }
  )
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)