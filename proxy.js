const axios = require('axios');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    const { text } = req.query;

    const request = await axios({
        method: 'post',
        data: {
            text,
            speed: 1,
            response_type: 1,
        },
        // responseType: 'stream'
    });
    fs.writeFile('audio.wav', request.data, () => {});
    return request.data.pipe(res);
});

app.listen(3000, () => {
    console.log('Server start at port 3000');
});
