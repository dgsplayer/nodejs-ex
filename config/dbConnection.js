var mysql = require('mysql');

module.exports = function(){
  return mysql.createConnection({
   host : 'localhost',
    user : '',
    password : '',
    database : 'test'
  });
};
