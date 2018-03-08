import {CompanyInterface} from './company-interface';

export interface ApiInterface {
  nhits: number;
  parameters: {};
  records: CompanyInterface[];
  facet_groups: {};
}
