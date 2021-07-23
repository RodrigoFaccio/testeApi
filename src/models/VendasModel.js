 
const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class vendas extends Model{
    static init(sequelize){
        super.init({
            idCliente:DataTypes.STRING,
            total:DataTypes.STRING, 
            entrada:DataTypes.DOUBLE,  
            parcelas:DataTypes.DOUBLE,  
            
           data_compra:DataTypes.DATEONLY,
           status:DataTypes.TINYINT,


        },{
            freezeTableName: true, 
            sequelize,
        });
        
        
    }
    
  
   

}
module.exports = vendas;