var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

var connection = dbConnection();

app.get('/noticias',function(req,res){
connection.query('select * from empresas;',function(error, result)
{
  res.render('noticias/noticias',{noticias: result});
  //res.send(result);
});


    //
  });
};
