const pokemon = require('.models/pokemon')

const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/pokemon', (req, res) => {
    res.render('index')
})