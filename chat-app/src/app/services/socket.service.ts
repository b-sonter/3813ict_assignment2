/////////////////////////////////////////////////////////////////////////////
//
// This service is responsible for the socket service data
// being trandfered
//
//////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url='http://localhost:3000';
  private socket;

  constructor() { }

  //send message on socket server
  sendMessage(message){
    console.log('sendMessage()');
    this.socket.emit('add-message', message);
  }

  //get messages on socket server
  getMessages(){
    console.log('getMessages');
    this.socket = io(this.url);

    let observable = new Observable(observer => {
      this.socket.on('message', (data)=>{
        console.log("Recieved message from Websocket Server");
        observer.next(data)
      })
      return() => {
        this.socket.disconnect();
      }
    });

    return observable;
  }
}
