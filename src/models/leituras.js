const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const ReadSchema = new mongoose.Schema({
    data_hora: {
        type:  Date,
        default: Date.now
    },
    temperatura_ar:{
        type: Number
    },
    umidade_ar:{
        type: Number
    },
    temperatura_solo:{
        type: Number
    },
    umidade_solo:{
        type: Number
    },
    luminosidade:{
        type: Number
    }

});

ReadSchema.plugin(mongoosePaginate);

mongoose.model('Read',ReadSchema);