const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://web.whatsapp.com/';

const app = express().use(bodyParser.json());


const spawn = require('child_process').spawn;
const ls = spawn('python3', ['open.py']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

app.listen(3000, () => {
    console.log('listening');
});
