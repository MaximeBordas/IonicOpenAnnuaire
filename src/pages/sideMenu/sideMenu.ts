import { Component } from '@angular/core';
import { RetrieveCompaniesService } from "../../app/retrieve-companies.service";
import { Filters } from "../../app/Enum/filters.enum";

@Component({
  selector: 'page-sideMenu',
  templateUrl: 'sideMenu.html',
})
export class sideMenu {
  totalCompanies: number;
  facetGroups = [];
  facetCount = [];

  hideApe = true;
  hideCategories = true;
  hideCounty = true;
  hideCity = true;
  hideCreation = true;
  hideLegal = true;
  hideEffectives = true;
  hideRevenues = true;
  hidePostal = true;

  constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    this.retrieveCompaniesService.totalCompanies.subscribe(
      (total: number) => this.totalCompanies = total
    );
    this.retrieveCompaniesService.facetGroupsCompanies.subscribe(
      (facets = []) => {
        this.facetGroups = facets;
        this.countFacets();
      }
    );
  }

  toggleFilter(filter, visible): void {
    switch (filter) {
      case Filters.APE:
        this.hideApe = visible;
        break;
      case Filters.CATEGORIES:
        this.hideCategories = visible;
        break;
      case Filters.COUNTY:
        this.hideCounty = visible;
        break;
      case Filters.CITY:
        this.hideCity = visible;
        break;
      case Filters.CREATION:
        this.hideCreation = visible;
        break;
      case Filters.LEGAL:
        this.hideLegal = visible;
        break;
      case Filters.EFFECTIVES:
        this.hideEffectives = visible;
        break;
      case Filters.REVENUES:
        this.hideRevenues = visible;
        break;
      case Filters.POSTAL:
        this.hidePostal = visible;
        break;
    }
  }

  countFacets(): void {
    if (0 !== this.facetGroups.length) {
      this.facetGroups.forEach(facetGroup => {
        this.facetCount[facetGroup.name] = [];
        facetGroup.facets.forEach(facet => {
          if (undefined === this.facetCount[facetGroup.name][facet.name]) {
            this.facetCount[facetGroup.name][facet.name] = facet.count;
          }
        });
      });
    }
  }

  retrieveCountFacetByFilterAndValue(filter, value) {
    if (this.facetCount[filter]) {
      return this.facetCount[filter][value] ? this.facetCount[filter][value] : 0;
    }
    return 0;
  }
}
