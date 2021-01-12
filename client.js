const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data)=>{
      console.log('server says: ', data);
     });

  conn.on('connect', ()=>{
        console.log('Successfully connected to game server');
    });

    // conn.on('connect', ()=>{
    //     conn.write('Move: left');
    //})

  return conn;
}

// console.log('Connecting ...');
// connect();

module.exports = { connect };