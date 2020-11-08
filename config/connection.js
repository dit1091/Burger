var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.pass,
  database : config.db,
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
