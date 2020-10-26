const axios = require('axios');

const VA_URL = 'https://nlp.vnlp.ai/ivr/5f6c0a7136a73a276f4c578e';

(async () => {
    const endpoint = `${VA_URL}/`;
    const start = Date.now();
    const promises = [];
    for (let i = 0; i < 1; i++) {
        promises.push(axios.post(endpoint, {
            userId: '123123',
            inputText: 'xin chào',
            // inputKey: dtmfKey == 1 ? "một" : null,
        }).then(() => {
            console.log('Request child: ', Date.now() - start);
        }));

    }
    await Promise.all(promises);
    console.log('Request: ', Date.now() - start);
})();