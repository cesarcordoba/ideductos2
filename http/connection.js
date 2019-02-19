var fs = require('fs');
var mysql = require('mysql');
var Sequelize = require('sequelize');
/*
var sequelize = new Sequelize('heroku_8336c91bfbfd82e', 'bebb7ad19454a6', '28d7532c', {
    host: 'us-cdbr-iron-east-04.cleardb.net',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
*/

var sequelize = new Sequelize('ideductos', 'cesar', '1234', {
    host: '35.238.229.92',
    dialect: 'mysql',
    operatorsAliases: false,
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// var sequelize = new Sequelize('ideductos', 'ideductos', '#1q2w3e4r', {
//     host: '35.226.84.114',
//     dialect: 'mysql',
//     port: '3306',
//     pool: {
//         min: 10,
//         max: 300,
//         idle: 30000,
//     },
//     dialectOptions: {
//         requestTimeout : 30000,
//         encrypt: true,
//         ssl: {
//             ca: fs.readFileSync('ssl.crt.pem')
//         }
//     }
// });

// 
sequelize.sync()
.then(() =>  console.log('Connecion realizada'))
.catch(err =>  console.log('No se puede conectar a la bd:', err))


module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
