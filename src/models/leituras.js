const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    data_hora: {
        type:  Date,
        default: Date.now
    },
    temperatura_ar:{

    },
    humidade_ar:{
        
    }
})