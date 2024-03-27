const express = require('express')
const app = express();
const port = 8080;
var cookieParser = require('cookie-parser')

app.listen(port, () => console.log(`Express server listening on port ${port}`))

app.use(express.json(), cookieParser())

//Use Postman to Post a JSON object with a "username: ..." at the route /login
app.post('/login', function (req, res) {
  res.cookie('username', req.body.username);
  res.status(200).send(req.body.username)
})

//Use Postman to Get the JSON object with the name of the user at the route /hello
app.get('/hello', function (req, res) {
  res.send(`Hello, ${req.cookies.username}`)
})