import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { SignupPage } from '../pages/signup/signup';
import { ClasslistPage } from '../pages/classlist/classlist';
import { NoticeboardPage } from '../pages/noticeboard/noticeboard';
import { ResultPage } from '../pages/result/result';
import { StudentlistPage } from '../pages/studentlist/studentlist';
import { BirthdayPage } from '../pages/birthday/birthday';
import { AttendencePage } from '../pages/attendence/attendence';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    ChatPage,
    ForgotpasswordPage,
    ResetpasswordPage,
    SignupPage,
    ClasslistPage,
    NoticeboardPage,
    ResultPage,
    StudentlistPage,
    BirthdayPage,
    AttendencePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    ChatPage,
    ForgotpasswordPage,
    ResetpasswordPage,
    SignupPage,
    ClasslistPage,
    NoticeboardPage,
    ResultPage,
    StudentlistPage,
    BirthdayPage,
    AttendencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
