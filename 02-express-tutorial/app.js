const express = require('express');
const path = require('path');
const app  = express();

// setup static and middleware
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.get('/about', (req, res) => {
    res.status(200).send('<h1>About</h1>');
})


app.all('*', (req, res) => {
    res.status(404).send('<h1>Not Found</h1>');
})


app.listen(5000, () => {
    console.log('listening on port 5000')
})