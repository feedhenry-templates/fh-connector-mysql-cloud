/*
 Executes a MySQL Query
 @param param.query : the query to execute
 */
exports.mysql = function(params, cb) {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
  });

  connection.connect();

  connection.query(params.query, function(err, rows, fields) {
    if (err) {
      return cb(err);
    }

    return cb(err, {
      rows: rows
    });
  });

  connection.end();
};