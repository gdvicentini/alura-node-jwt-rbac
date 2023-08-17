const redis = require('redis');
const manipulaLista = require('./manipula-lista.js');
const allowlist = redis.createClient({ prefix: 'allowlist-refresh-token:'});

module.exports = manipulaLista(allowlist);