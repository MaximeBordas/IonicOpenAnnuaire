import { Component } from '@angular/core';
import { File } from "@ionic-native/file";
import {Transfer, TransferObject} from '@ionic-native/transfer';
import { AlertController, LoadingController,Platform } from 'ionic-angular';
import { InAppBrowser} from "@ionic-native/in-app-browser";


declare var cordova: any;

@Component({
  selector: 'page-export',
  templateUrl: 'exportCompanies.html',
  providers: [Transfer,TransferObject,File]

})
export class exportCompanies {

  url: string;
  path: string ='';
   CSV = 'https://public.opendatasoft.com/explore/dataset/sirene/download/?format=csv&use_labels_for_header=true';
   JSON = 'https://public.opendatasoft.com/explore/dataset/sirene/download/?format=json&use_labels_for_header=true';
   XLS = 'https://public.opendatasoft.com/explore/dataset/sirene/download/?format=xls&use_labels_for_header=true';
  constructor(private iab: InAppBrowser,private platform: Platform, private transfer: Transfer,private alertCtrl: AlertController,private loadingCtrl: LoadingController) {

    if(this.platform.is('ios')){
      this.path = cordova.file.documentsDirectory;
    }
    if(this.platform.is('android')){
      this.path = cordova.file.externalDataDirectory;
    }
  }

  DownloadAll(format: string)
  {
    let loading = this.loadingCtrl.create({
      content: 'Téléchargement en cours...'
    });

    const fileTransfert: TransferObject = this.transfer.create();

    let csv = encodeURI('https://public.opendatasoft.com/explore/dataset/sirene/download/?format=csv&use_labels_for_header=true');
    let json = encodeURI('https://public.opendatasoft.com/explore/dataset/sirene/download/?format=json&use_labels_for_header=true');
    let xls = encodeURI('https://public.opendatasoft.com/explore/dataset/sirene/download/?format=xls&use_labels_for_header=true');

    switch (format){
      case 'CSV':
        fileTransfert.download(csv,this.path+ 'siren.csv').then((entry) => {
            const alertSuccess = this.alertCtrl.create({
              title: `Fichier ${format} téléchargé.`,
              subTitle: `Le fichier .${format} à bien été téléchargé dans le path : ${entry.toURL()}`,
              buttons: ['Ok']
            });

            loading.dismiss();
            alertSuccess.present();
          }, (error) => {
          const alertFailure = this.alertCtrl.create({
            title: `Download Failed!`,
            subTitle: `Erreur lors du téléchargement. Error code: ${error.code}`,
            buttons: ['Ok']
          });
          loading.dismiss();
          alertFailure.present();
          });

        break;
        case 'JSON':
          fileTransfert.download(json,this.path + 'siren.json').then((entry) => {
          const alertSuccess = this.alertCtrl.create({
            title: `Fichier ${format} téléchargé.`,
            subTitle: `Le fichier .${format} à bien été téléchargé dans le path : ${entry.toURL()}`,
            buttons: ['Ok']
          });

          loading.dismiss();
          alertSuccess.present();
        }, (error) => {
          const alertFailure = this.alertCtrl.create({
            title: `Download Failed!`,
            subTitle: `Erreur lors du téléchargement. Error code: ${error.code}`,
            buttons: ['Ok']
          });
          loading.dismiss();
          alertFailure.present();
        });
          break;
        case 'XLS':
          fileTransfert.download(xls,this.path + 'siren.xls').then((entry) => {
          const alertSuccess = this.alertCtrl.create({
            title: `Fichier ${format} téléchargé.`,
            subTitle: `Le fichier .${format} à bien été téléchargé dans le path : ${entry.toURL()}`,
            buttons: ['Ok']
          });

          loading.dismiss();
          alertSuccess.present();
        }, (error) => {
          const alertFailure = this.alertCtrl.create({
            title: `Download Failed!`,
            subTitle: `Erreur lors du téléchargement. Error code: ${error.code}`,
            buttons: ['Ok']
          });
          loading.dismiss();
          alertFailure.present();
        });
          break;
    }
  }
  downLoadAPI(typeExport: string){
    switch (typeExport){
      case 'CSV':
        this.url = this.CSV;
        break;
      case 'JSON':
        this.url = this.JSON;
        break;
      case 'XLS':
        this.url = this.XLS;
        break;
    }
    const navigateur = this.iab.create(this.url);
    navigateur.show();
  }
}
