const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());
const port = 3000
mongoose.connect('mongodb+srv://Spindola:MongoDBSpindola@fl-imoveis-api.gxf24qe.mongodb.net/?retryWrites=true&w=majority&appName=fl-imoveis-api')

// Definindo o schema e modelo do Imovel
const imovelSchema = new mongoose.Schema({
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

const Imovel = mongoose.model('Imovel', imovelSchema);

// Rota para obter todos os imóveis
app.get('/api/imoveis', async (req, res) => {
    const imoveis = await Imovel.find();
    return res.json(imoveis);
});

// Rota para criar um novo imóvel
app.post('/api/imoveis', async (req, res) => {
    const imovel = new Imovel(req.body);
    await imovel.save();
    return res.json(imovel);
});

// Rota para atualizar um imóvel existente
app.put('/api/imoveis/:id', async (req, res) => {
    const imovel = await Imovel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(imovel);
});

// Rota para deletar um imóvel
app.delete('/api/imoveis/:id', async (req, res) => {
    const imovel = await Imovel.findByIdAndDelete(req.params.id);
    return res.json(imovel);
});

// Inicializando o servidor
app.listen(port, () => {
    console.log('App running...')
});

/*

app.get('/', async (req, res) => {
    const imovel = await Imovel.find();
    return res.send(imovel)
}) // Vai fazer a leitura de todos os meus imovel.

app.listen(port, () => {
  console.log('App running...')
})

app.delete("/:id", async (req, res) => {
    const imovel = await Imovel.findByIdAndDelete(req.params.id)
    return res.send(imovel)
}) // Para deletar um imovel

app.put("/:id", async(req, res) =>{
    const imovel = await Imovel.findByIdAndUpdate(req.params.id, {
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
    return res.send(imovel)
}) // Faz o update do imovel

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
    return res.send(imovel)
})

*/