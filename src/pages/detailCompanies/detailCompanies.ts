import { Component} from "@angular/core";
import { Company } from "../../app/Models/company";
import { NavParams} from "ionic-angular";

@Component({
  selector: 'page-detailcompanies',
  templateUrl: 'detailCompanies.html',
})

export class DetailCompanies {
  company : Company;


  constructor(public NavParams: NavParams){
    this.company = this.NavParams.data;
  }
}
