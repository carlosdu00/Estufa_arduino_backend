const mongoose = require('mongoose');
const Leitura = mongoose.model('Read');

module.exports ={
    async insert (req,res){
        const leituras = await Leitura.create(req.body);
        return res.json({leituras});
    },
    async index (req,res) {
        const {page} = req.query;

        const leituras = await Leitura.paginate({}, {page, limit: 5});

        return res.json({leituras});
    },
    async details (req,res){
        const leituras = await Leitura.findById(req.params.id);

        return res.json({leituras});
    },
    async update (req,res){
        const leituras = await Leitura.findByIdAndUpdate(req.params.id, req.body,{new:true});

        return res.json(leituras);
    },
    async delete (req,res){
        await Leitura.findByIdAndRemove(req.params.id);

        return res.send();
    }
};