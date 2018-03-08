
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RetrieveCompaniesService } from '../../app/retrieve-companies.service';
import { Company } from '../../app/Models/company';

@Component({
  selector: 'page-list',
  templateUrl: 'listCompanies.html'
})
export class listCompanies implements OnInit {
  companies: Company[];

  constructor(public navCtrl: NavController, private retrieveCompaniesService: RetrieveCompaniesService) {
    this.retrieveCompaniesService.retrieveCompanies.subscribe(
      (companies: Company[]) => this.companies = companies
    );
  }

  ngOnInit(): void {
    this.retrieveCompaniesService.getCompanies();
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.retrieveCompaniesService.loadNextCompanies();
      infiniteScroll.complete();
    }, 700);
  }
}
