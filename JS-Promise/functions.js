const axios = require('axios');

const resp = async function () {
    try {
        return await prom();
    } catch{
        return false;
    }
}

const prom = function () {
    return new Promise((resolve, reject) => {
        axios
        .get('https://api.ipify.org?format=json')
        .then(response => resolve(response.data.ip))
        .catch(error => reject(error.response.data));
    });
    
}

module.exports = resp