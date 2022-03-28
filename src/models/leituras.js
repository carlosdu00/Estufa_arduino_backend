const mongoose = require('mongoose');

const ReadSchema = new mongoose.Schema({
    data_hora: {
        type:  Date,
        default: Date.now
    },
    temperatura_ar:{
        type: Number
    },
    humidade_ar:{
        type: Number
    },
    temperatura_solo:{
        type: Number
    },
    humidade_solo:{
        type: Number
    },
    luminosidade:{
        type: Number
    }

});

mongoose.model('Read',ReadSchema)