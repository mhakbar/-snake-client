let connection;

// const setupInput = (conn) => {
//   connection = conn;
// };


// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;  
};

const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
} else if (data === 'w') {
    //console.log('Move: up');
    connection.write('Move: up');
} else if (data === 'a') {
  //console.log('Move: left');
  connection.write('Move: left');
} else if (data === 's') {
  //console.log('Move: down');
  connection.write('Move: down');
} else if (data === 'd') {
  //console.log('Move: right');
  connection.write('Move: right');
} else if (data === "i") {
  connection.write("Say: Yo");
  
} else if (data === "o") {
  connection.write("Say: Hi");
} else if (data === "p") {
  connection.write("Say: What's UP");
}
};





module.exports = setupInput;
