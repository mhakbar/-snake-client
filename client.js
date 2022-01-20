const { IP, PORT } = require("./constants");
const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  
  conn.on("connect", () => {
    console.log("connection successful");// code that does something when the connection is first established
    conn.write('Name: MHA');
    
  //   setTimeout(() => {
  //     conn.write('Move: up');

  //   }, 50);

  //   setTimeout(() => {
  //     conn.write('Move: up');

  //   }, 100);

  //   setTimeout(() => {
  //     conn.write('Move: up');

  //   }, 150);

  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 50);
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  
  
  
  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect; //need to export connect function to play.js file. 
