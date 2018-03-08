import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import  { exportCompanies } from '../pages/exportCompanies/exportCompanies';
import  { listCompanies } from '../pages/listCompanies/listCompanies';
import  { mapCompanies } from '../pages/mapCompanies/mapCompanies';
import { navbar } from "../pages/navbar/navbar";
import { RetrieveCompaniesService } from './retrieve-companies.service';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    exportCompanies,
    listCompanies,
    mapCompanies,
    navbar,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TagInputModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    exportCompanies,
    listCompanies,
    mapCompanies,
    navbar,
  ],
  providers: [
    RetrieveCompaniesService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
