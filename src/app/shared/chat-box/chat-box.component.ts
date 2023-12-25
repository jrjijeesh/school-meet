import { Component, OnInit } from '@angular/core';
import { Websocket2Service } from './websocket2.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  showWindow = false;
  viewChatBoxTab = false;

  constructor(private wsService: Websocket2Service) {}

  ngOnInit(): void {
    this.openConnection();
  }

  openConnection() {
    this.wsService.openConnection('http://localhost:9080');
  }

  openChatBox() {
    this.showWindow = true;
  }

  send() {
    this.wsService.send('');
  }

  close() {
    this.wsService.close();
  }

  selectUser() {
    this.viewChatBoxTab = true;
  }
}
