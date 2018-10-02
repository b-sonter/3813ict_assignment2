import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userlog: string
  messages=[];
  message;
  connection;

  constructor(private sockServer: SocketService, private router: Router) { }

  ngOnInit() {
    this.userlog = sessionStorage.getItem('userlog');
    console.log("chat joined by "+ this.userlog);
    this.connection = this.sockServer.getMessages().subscribe(message=>{
      this.messages.push(message);
      this.message="";
    });
  }

  sendMessage(){
    this.sockServer.sendMessage(this.userlog+': '+this.message);
  }

  ngOnDestroy(){
  }


}
