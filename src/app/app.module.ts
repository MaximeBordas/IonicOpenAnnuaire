import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicOpenAnnuaire } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { HttpClientModule } from '@angular/common/http';

import  { exportCompanies } from '../pages/exportCompanies/exportCompanies';
import  { listCompanies } from '../pages/listCompanies/listCompanies';
import  { mapCompanies } from '../pages/mapCompanies/mapCompanies';
import  { sideMenu } from '../pages/sideMenu/sideMenu';
import  { FiltersPage } from '../pages/filters/filters';
import  { TabsPage } from '../pages/tabs/tabs';

import  { RetrieveCompaniesService } from './retrieve-companies.service';
import  {QueryBuilderService} from "./query-builder.service";

import  { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    IonicOpenAnnuaire,
    TabsPage,
    exportCompanies,
    listCompanies,
    mapCompanies,
    sideMenu,
    FiltersPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TagInputModule,
    HttpClientModule,
    IonicModule.forRoot(IonicOpenAnnuaire)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    IonicOpenAnnuaire,
    TabsPage,
    exportCompanies,
    listCompanies,
    mapCompanies,
    sideMenu,
    FiltersPage,
  ],
  providers: [
    RetrieveCompaniesService,
    QueryBuilderService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
