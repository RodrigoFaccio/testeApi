const Vendas  = require('../models/VendasModel');



module.exports={
    async listarVendasCliente(req,res){
        const {id_cliente} = req.params;
        const vendas = await Vendas.findAll({where:{id_cliente}});

        res.json(vendas);
         
         

        

    },

    
  
}
