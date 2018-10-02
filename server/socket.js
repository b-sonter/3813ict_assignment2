module.exports = function(app, io){
  console.log("Server socket initialised");

  //connect user to sockets
  io.on('connection', (socket)=>{
    console.log('user connected to chat');

    //log when user disconnects
    socket.on('disconnect', function(){
      console.log('user was disconnected from chat');
    });

    //log when a message is sent
    socket.on('add-message', (message)=>{
      io.emit('message',{type:'message', text:message});
    });

  });
}
