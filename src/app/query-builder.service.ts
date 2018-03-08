import {Injectable} from '@angular/core';
import {Filter} from './Models/filter';

@Injectable()
export class QueryBuilderService {
  queryBuilder(filters: Filter[]): string {
    return filters.map((filter: Filter) => {
      return filter.values.length > 0
        ? '(' + filter.getFormattedValues().join(' OR ') + ')'
        : undefined;
    }).filter(item => typeof item !== 'undefined').join(' AND ');
  }
}
