const redis = require('redis')
const conexao = redis.createClient({ prefix: 'redefinicao-de-senha' })
const manipulalista = require('./manipula-lista')
module.exports = manipulalista(conexao)
