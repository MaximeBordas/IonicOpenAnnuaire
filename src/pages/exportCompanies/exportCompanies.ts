import { Component } from '@angular/core';
import { InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-export',
  templateUrl: 'exportCompanies.html',

})
export class exportCompanies {

   CSV = 'https://public.opendatasoft.com/explore/dataset/sirene/download/?format=csv&use_labels_for_header=true';
   JSON = 'https://public.opendatasoft.com/explore/dataset/sirene/download/?format=json&use_labels_for_header=true';
   XLS = 'https://public.opendatasoft.com/explore/dataset/sirene/download/?format=xls&use_labels_for_header=true';
   url: string;
  constructor(private iab: InAppBrowser) {

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
