import { Component, Input, OnInit } from '@angular/core';
import { Filter } from "../../app/Models/filter";
import { RetrieveCompaniesService } from "../../app/retrieve-companies.service";
import { DefaultFilters } from "../../app/Models/default-filters";

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage implements OnInit {
  timeout: number;
  filter: Filter;
  options: DefaultFilters[];
  items = [];
  facets: string[] = [];

  @Input() paramName: string;
  @Input() paramLabel: string;
  @Input() needName = true;
  @Input() multiple = true;
  @Input() operator = ':';
  @Input() type = 'text';
  @Input() optionIndex: string;
  @Input() display: boolean;

  constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
  }

  ngOnInit(): void {
    this.filter = new Filter(this.paramName, this.operator, this.multiple, this.needName);
    this.options = DefaultFilters[this.optionIndex]
  }

  onFilter(): void {
    this.retrieveCompaniesService.filterCompanies.emit(this.filter);
    this.retrieveCompaniesService.facetCompanies.emit(this.facets);
  }

  addFilter(filter): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (filter.value) {
        this.filter.addValue(filter.value.toUpperCase().trim());
      }
      else if (
        (undefined !== filter.trim() && 0 !== filter.trim().length) ||
        ('name' === this.paramName && 0 === filter.trim().length)
      ) {
        this.filter.addValue(filter.toUpperCase().trim());
      }

      this.addFacet();
      this.onFilter();
    }, 700);
  }

  removeFilter(filter, input): void {
    if (input) {
      let item = input.items.find(item => {
        return item.value === filter
      });
      let index = input.items.indexOf(item);
      input.items.splice(index, 1);
    }

    this.filter.removeValue(filter.value ? filter.value : filter);
    this.onFilter();
  }

  addFacet(): void {
    if (!(this.facets.some(x => x === this.paramName)) && 'name' !== this.paramName) {
      this.facets.push(this.paramName);
    }
  }

  retrieveDefaultFilter(value) {
    return this.formatDisplayFilter(this.options.find(option => {
      return option.value === value
    }).display);
  }

  formatDisplayFilter(value): void {
    return value.length > 19 ? value.slice(0, 20) + '...' : value;
  }
}
