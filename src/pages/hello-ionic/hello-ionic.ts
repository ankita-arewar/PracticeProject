import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  
  constructor(public navCtrl: NavController) {
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

}
