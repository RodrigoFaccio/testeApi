const express = require('express');
const routes = express.Router();
const User = require('./controllers/UserController');
const TokenController = require('./controllers/TokenController');
const Vendas = require('./controllers/VendasController');



//USUARIOS
routes.get('/user/list', User.list);
routes.post('/user/login', TokenController.login);
routes.post('/user/cadastro',User.cadastro);
routes.get('/user/:id_user/perfil',User.perfilUsuario);

//VENDAS
routes.get('/vendas/:id_cliente/lista', Vendas.listarVendasCliente);




module.exports = routes; 