const pg        = require('pg');
const express   = require('express');
const app       = express();

const config = {
    user: 'geohash',
    database: 'gp_geohash_db',
    password: 'h%u95nsh56#l',
    port: 5432,
    host: '211.44.250.202',
    dialect: 'postgresql'

};
 
// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

app.get('/select', (req, res, next) => {
   pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query(' SELECT * FROM waynow_notice ORDER BY wn_reg_date DESC;', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
       })
   })
});

<<<<<<< HEAD
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
=======
app.listen(8081, function () {
    console.log('Server is running.. on Port 8081');
>>>>>>> bdcaa7b207d841b3333d67525202dcc968338372
});