import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClasslistPage } from '../classlist/classlist';
import { StudentlistPage } from '../studentlist/studentlist';
import { NoticeboardPage } from '../noticeboard/noticeboard';
import { ResultPage } from '../result/result';
import { AttendencePage } from '../attendence/attendence';
import { BirthdayPage } from '../birthday/birthday';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  	goToClasslist(){
		this.navCtrl.push(ClasslistPage);
	}

  	goToStudentlist(){
		this.navCtrl.push(StudentlistPage);
	}

	goToResult(){
		this.navCtrl.push(ResultPage);
	}

	goToNoticeboard(){
		this.navCtrl.push(NoticeboardPage);
	}

	goToAttendence(){
		this.navCtrl.push(AttendencePage);
	}

	goToBirthday(){
		this.navCtrl.push(BirthdayPage);
	}
}
