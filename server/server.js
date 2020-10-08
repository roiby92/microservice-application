const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const api = require("./router/api")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)

const PORT = 3100
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
