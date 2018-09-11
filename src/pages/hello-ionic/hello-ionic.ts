import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { SignupPage } from '../signup/signup';
import { Socket } from 'ng-socket-io';
import { Chatpage } from '../chat/chat';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
	username= '';
  
  constructor(public navCtrl: NavController, private socket: Socket) {
  	}

  	goToHome() {
	  this.navCtrl.push(HomePage);
	}

	goToForgotpw(){
		this.navCtrl.push(ForgotpasswordPage);
	}

	goToSignup(){
		this.navCtrl.push(SignupPage);
	}

	goToChat(){
		this.socket.connect();
	    this.socket.emit('Username', this.username);
	    this.navCtrl.push('ChatPage', { username: this.username });
	}

}
