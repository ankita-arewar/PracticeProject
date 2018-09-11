import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
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
import { NoticePage } from '../pages/notice/notice';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
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
    AttendencePage,
    NoticePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
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
    AttendencePage,
    NoticePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
