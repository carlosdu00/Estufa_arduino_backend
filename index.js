const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM4', baudRate: 9600 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0.m4kis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});

requireDir('./src/models')

app.use('/sistema', require('./src/routes/routes'));

app.listen(3000, () => console.log('Online na porta 3000'));
