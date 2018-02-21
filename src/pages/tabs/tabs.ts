import { Component } from '@angular/core';

import {exportCompanies} from "../exportCompanies/exportCompanies";
import {mapCompanies} from "../mapCompanies/mapCompanies";
import {listCompanies} from "../listCompanies/listCompanies";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = listCompanies;
  tab2Root = mapCompanies;
  tab3Root = exportCompanies;

  constructor() {

  }
}
