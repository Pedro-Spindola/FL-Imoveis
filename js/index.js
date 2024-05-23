const express = require('express');
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000
mongoose.connect('mongodb+srv://Spindola:MongoDBSpindola@fl-imoveis-api.gxf24qe.mongodb.net/?retryWrites=true&w=majority&appName=fl-imoveis-api');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('App running...')
})

const Imovel = mongoose.model('Imovel', { 
    titulo: String,
    endereço: String,
    bairro: String,
    cod: Number,
    area: Number,
    garagem: Number,
    quartos: Number,
    banheiros: Number,
    descricao: String,
    categoria: String,
    imagem_url: {
        imagem1: String, 
        imagem2: String
    }

});

app.post("/", async (req, res) => {
    const imovel = new Imovel({
        titulo: req.body.titulo,
        endereço: req.body.endereço,
        bairro: req.body.bairro,
        cod: req.body.cod,
        area: req.body.area,
        garagem: req.body.garagem,
        quartos: req.body.quartos,
        banheiros: req.body.banheiros,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        imagem_url: {
            imagem1: req.body.imagem_url.imagem1,
            imagem2: req.body.imagem_url.imagem2
        }
    })

    await imovel.save()
    res.send(imovel)
})