const mongoose = require('mongoose');
const Leitura = mongoose.model('Read');

module.exports ={
    async insert (req,res){
        const leituras = await Leitura.create(req.body);
        return req.json(leituras);
    }
};