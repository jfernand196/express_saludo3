const express = require('express');
const app = express()

app.set('view engine', 'pug'),
app.set('views', 'views')

app.use(express.urlencoded());


app.get('/', (req,res)=>{

    res.render('index');
 
})

app.post('/', (req, res) => {
    // console.log(`Hola ${req.body.name}`)
    res.render("saludo",{message:req.body.name})
  });


app.listen(3000, ()=>{console.log('port 3000 ok')})