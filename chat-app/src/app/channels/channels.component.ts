///////////////////////////////////////////////////////////////////////////////////
//
// Get and sort channels for users to open, add or delete depending on persmissions
// sent to home component to be utilised
//
////////////////////////////////////////////////////////////////////////////////////
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  @Input() channels;
  @Input() group;
  @Output() channelChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
