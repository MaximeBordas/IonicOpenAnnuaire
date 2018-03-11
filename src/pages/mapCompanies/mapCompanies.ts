import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Company } from "../../app/Models/company";
import { RetrieveCompaniesService } from "../../app/retrieve-companies.service";

declare let google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'mapCompanies.html'
})
export class mapCompanies implements OnInit {
  @ViewChild('mapCompanies') mapRef: ElementRef;
  companies: Company[];
  alreadyFiltered = false;

  constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    this.retrieveCompaniesService.filterCompanies.subscribe(
      () => this.alreadyFiltered = true
    );
    this.retrieveCompaniesService.retrieveCompanies.subscribe(
      (companies: Company[]) => {
        this.companies = companies;
        this.displayMap();
      }
    );
  }

  ngOnInit(): void {
    this.retrieveCompaniesService.reloadCompanies();
  }

  displayMap(): void {
    const location = new google.maps.LatLng(46.4670728, 2.0584019);

    const options = {
      center: location,
      zoom: 8,
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.companies.forEach((company: Company) => {
      if (undefined !== company.coordonnees) {
        let latLng = new google.maps.LatLng(company.coordonnees[0], company.coordonnees[1]);
        let content = "Nom : " + company.name + "<hr>Adresse : " + company.address + "<br>Code postal : " + company.postal_code + "<br>Ville : " + company.city;
        let infoWindow = this.infoWindow(content);
        let marker = this.addMarker(latLng, map, company.name);

        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });
      }
    });
  }

  addMarker(position, map, title) {
    return new google.maps.Marker({
      position,
      map,
      title
    });
  }

  infoWindow(content) {
    return new google.maps.InfoWindow({
      content: content
    });
  }
}
