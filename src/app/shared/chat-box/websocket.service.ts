import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  receivedMessages: any;

  isOpen = false;

  wsConnectionTimeout = 10000;

  wsConnectionRetriesNumber = 4;

  retryNumber = 0;

  wsAlertSubscribingChannnel = '/refreshAlert';

  wsAlertSendingChannel = '/app/notify/alert';

  socketClient: any = null;
  tokenheader: any;

  constructor() {}

  openConnection(url: string) {
    this.close();
    this.initSocket(url);
    /* this.socketClient.connect(
      this.tokenheader,
      frame => {
        this.isOpen = true;
        console.log('Connexion started');
        this.getMessages(); //this.socketClient.reconnect_delay = 2000;
      },
      this.errorCallBack
    ); */
    this.socketClient.connect(
      this.tokenheader,
      (frame: any) => {
        this.isOpen = true;
        console.log('Connexion started');
        this.getMessages(); //this.socketClient.reconnect_delay = 2000;
      },
      this.errorCallBack
    );
  }

  send(message: string) {
    this.isOpen = true;

    console.log('sending messages');

    /* this.socketClient.send(
      this.wsAlertSendingChannel,
      this.tokenheader,
      message
    ); */
  }

  close() {
    if (this.socketClient !== null) {
      this.socketClient.disconnect();
      this.socketClient = null;
      this.isOpen = false;
    }
    console.log('Disconnected');
  }

  errorCallBack(error: string) {
    this.isOpen = false;

    console.log('Connexion failure' + error);

    console.log('errorCallBack -> ' + error);

    setTimeout(() => {
      //this.connect();
    }, 5000);
  }

  getMessages() {
    /* this.wssubscription = this.socketClient.subscribe(
      this.wsAlertSubscribingChannnel,
      (message: any) => {
        this.isOpen = true;
        console.log('Connexion sucess');
        console.log('Message Recieved from Server :: ' + message);
        this.receivedMessages = message.body;
      },
      this.tokenheader
    ); */
  }

  private initSocket(url: string) {
    console.log('Initialize WebSocket Connection');

    // let ws = new SockJS(url + '/secured/room');

    // this.socketClient = Stomp.over(ws);

    this.socketClient = this.configureSocketClient(this.socketClient);
  }

  private configureSocketClient(client: any) {
    client.debug = null;

    // client.heartbeat.outgoing = 2000;

    // client.heartbeat.incoming = 0;

    // client.reconnect_delay = 5000

    return client;
  }
}
