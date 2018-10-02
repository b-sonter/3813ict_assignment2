////////////////////////////////////////////////////////////////////////////
//
// The chat component that allows users to send messages to one another
// once logged in
//
///////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { Router } from '@angular/router';
import { ImguploadService } from '../services/imgupload.service';

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
  selectedfile= null;
  imagepath = '';

  constructor(private sockServer: SocketService, private router: Router, private imguploadService: ImguploadService) { }

  ngOnInit() {
    //get user name from sessionStorage
    this.userlog = sessionStorage.getItem('userlog');
    //log who joins chat
    console.log("chat joined by "+ this.userlog);
    //get messages to display
    this.connection = this.sockServer.getMessages().subscribe(message=>{
      this.messages.push(message);
      this.message="";
    });
  }

  //send socket messages
  sendMessage(){
    this.sockServer.sendMessage(this.userlog+': '+this.message);
  }

  // image upload - not complete
  // onFileSelected(event){
  //   console.log(event);
  //   this.selectedfile = event.target.files[0];
  // }
  //
  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedfile, this.selectedfile.name);
  //   this.imguploadService.imgupload(fd).subscribe(res=>{
  //     this.imagepath = res.data.filename;
  //     console.log(res.data.filename);
  //   })
  // }

}
