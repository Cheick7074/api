const express = require('express');
const bodyParser=require('body-parser');
const Sequelize=require('./src/db/Sequileze');



const app = express();
const port = 3306;

app.use(bodyParser.json())

Sequelize.initDb();

app.get('/',(req,res)=>{
    res.json('gooood work');
})
require('./src/api/finAllPokemon')(app);
require('./src/api/findPokemonByPk')(app)
require('./src/api/createPokemon')(app)
require('./src/api/updatePokemon')(app)
require('./src/api/deletePokemon')(app)


app.use((req,res)=>{
    res.status(404).json({message:"la ressource demander n'existe pas"})
})

app.listen(port,()=>console.log(`notre app a demarer sur http://localhost:${port}`));
