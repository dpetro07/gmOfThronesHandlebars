var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var PORT = 8080;
var bodyParser = require('body-parser');
var mysql = require('mysql');


app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', exphbs({defaultLayout: 'mainTwo'}));
app.set('view engine', 'handlebars');


var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'wish_list_db'
});


app

app.get('/' function (req, res) {
  connection.query("SELECT * FROM wish_list_db", function(err, results){
    if(err) {
      throw err;
    }
    var data = {
      mainTwo: results
    }
    res.render('mainTwo', data)
  });
});
app.post('/create', function(req, res) {
  var mySQLQuery = "INSERT INTO quick_notes (note) VALUES ('" + req.body.note + "')";
  connection.query(mySQLQuery, function(err){
    if (err) {
      throw err;
    }
    res.redirect('/');
  }); 
});


app.get('/', function(req, res) {
 connection.query("SELECT * FROM ")
})








// var lineage = {
//     lannister: {
//         house: 'House Lannister',
//         parents: {
//             first_parents: 'Joanna & Tywin',
//             second_parents: 'Devan & Dorna'
//         },
//         child: {
//             first_child: 'Cersei',
//             second_child: 'Jaime',
//             third_child: 'Tyrion',
//             fourth_child: 'Lancel'
//         }
//     },
//     targaryen: {
//         house: 'House Targaryen',
//         parents: 'Aerys II & Rhaella',
//         child: {
//             first_child: 'Rhaegar',
//             second_child: 'Viserys',
//             third_child: 'Daenerys'
//         }
//     },
//     stark: {
//         house: 'House Stark',
//         parents: 'Eddard & Catelyn',
//         child: {
//             first_child: 'Robb',
//             second_child: 'Sansa',
//             third_child: 'Arya',
//             fourth_child: 'Bran',
//             fifth_child: 'Rickon'       
//         }
//     },
// };


// app.get('/lannister', function(req,res){
//   res.render('family', lineage.lannister);
// });

// app.get('/targaryen', function(req,res){
//   res.render('family', lineage.targaryen);
// });

// app.get('/stark', function(req,res){
//   res.render('family', lineage.stark);
// });






app.listen(PORT, function(req, res){
  console.log('Listening');
});