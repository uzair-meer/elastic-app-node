import express from "express"

const app = express();
const {PORT=5001} = process.env


app.get('/', (req, res) =>{
    res.send(`<h3>testing elastic app !</h3>`)
})
app.get('/about', (req, res) =>{
    res.send(`<h3> about page!</h3>`)
})


app.listen(PORT, () =>{
    console.log('lisitnineif on port 5001')
})
