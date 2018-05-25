import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';

//iimport http module */
import { HttpModule } from '@angular/http';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabAtriclePage } from '../pages/tab-atricle/tab-atricle';
import { TabContactPage } from '../pages/tab-contact/tab-contact';

import { TabsPage } from '../pages/tabs/tabs';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { RegisterPage } from '../pages/register/register';


@NgModule({
  declarations: [
    MyApp,
    SideSchedulePage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSettingPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabAtriclePage,
    TabContactPage,
    TabsPage,
    CoursedetailPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  SideSchedulePage,
  SidePortfolioPage,
  SidePaymentPage,
  SideSettingPage,
TabHomePage,
TabContactPage,
TabCoursePage,
TabServicePage,
TabAtriclePage,
TabsPage,
CoursedetailPage,
RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider
  ]
})
export class AppModule {}
