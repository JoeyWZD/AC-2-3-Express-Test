const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  res.render('index')
})


app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/profolio', (req, res) => {
  res.render('profolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})



app.listen(port, () => {
  console.log(`the server is hosting ok`)
})