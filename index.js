const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)
app.use(logger)


app.listen(port, () => console.log(`http: ${port}`))