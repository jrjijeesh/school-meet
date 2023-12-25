import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
// import * as SockJS from 'sockjs-client';
// import * as Stomp from 'stompjs';

// import { UserSessionService } from '../../core/services/user-session.service';

@Injectable({
  providedIn: 'root'
})
export class Websocket2Service {
  receivedMessages: any;

  isOpen = false;

  wsConnectionTimeout = 10000;

  wsConnectionRetriesNumber = 4;

  retryNumber = 0;

  wsAlertSubscribingChannnel = '/refreshAlert';

  wsAlertSendingChannel = '/app/notify/alert';

  socketClient: any = null;
  tokenheader: any;

  stompClient: any;
  sessionId: string = '';

  constructor() {
    // const token = this.userSessionService.getToken();
    // this.tokenheader = { Authorization: token };
    /* this.stompClient = new StompJs.Client({
      brokerURL: 'ws://localhost:9080/secured/chat'
    });

    this.stompClient.activate(); */
    // var socket = new SockJS('http://localhost:9080/secured/chat');
    // this.stompClient = Stomp.over(socket);
    // this.stompClient.connect({}, (frame: any) => {
    //   // this.setConnected(opts, true);
    //   var url = this.stompClient.ws._transport.url;
    //   console.log(this.stompClient.ws._transport.url);
    //   url = url.replace(
    //     'ws://localhost:9080/spring-security-mvc-socket/secured/room/',
    //     ''
    //   );
    //   url = url.replace('/websocket', '');
    //   url = url.replace(/^[0-9]+\//, '');
    //   console.log('Your current session is: ' + url);
    //   this.sessionId = url;
    //   this.subscribeEvent();
    // });
  }

  subscribeEvent(): void {
    this.stompClient.subscribe(
      'http://localhost:9080' +
        '/secured/user/queue/specific-user' +
        '-user' +
        this.sessionId,
      (msgOut: any) => {
        console.log('msgOut' + msgOut);
        // this.messageOut(JSON.parse(msgOut.body), null);
      }
    );
  }

  openConnection(url: string) {
    /* this.close();
    this.initSocket(url); */
    /* this.socketClient.connect(
      this.tokenheader,
      frame => {
        this.isOpen = true;
        console.log('Connexion started');
        this.getMessages(); //this.socketClient.reconnect_delay = 2000;
      },
      this.errorCallBack
    ); */
    /* this.socketClient.connect(
      this.tokenheader,
      (frame: any) => {
        this.isOpen = true;
        console.log('Connexion started');
        this.getMessages(); //this.socketClient.reconnect_delay = 2000;
      },
      this.errorCallBack
    ); */
  }

  send(message: string) {
    this.isOpen = true;

    console.log('sending messages');

    var to = 'admin';
    var from = 'admin2';

    var msg = {
      from: from === undefined || from === null ? to : from,
      to: to === undefined || to === null ? 'ALL' : to,
      text: 'hi msg'
    };

    console.log(JSON.stringify(msg));
    this.stompClient.send(
      'http://localhost:9080' + '/spring-security-mvc-socket/secured/chat',
      {},
      JSON.stringify(msg)
    );

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

    /* let ws = new SockJS(url + '/secured/room');

    this.socketClient = Stomp.over(ws);

    this.socketClient = this.configureSocketClient(this.socketClient); */
  }

  private configureSocketClient(client: any) {
    client.debug = null;

    // client.heartbeat.outgoing = 2000;

    // client.heartbeat.incoming = 0;

    // client.reconnect_delay = 5000

    return client;
  }
}
