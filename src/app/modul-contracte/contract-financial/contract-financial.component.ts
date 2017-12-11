import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModulContracteComponent } from './../../modul-contracte/modul-contracte.component';

@Component({
  selector: 'app-contract-financial',
  templateUrl: './contract-financial.component.html',
  styleUrls: ['./contract-financial.component.css']
})
export class ContractFinancialComponent  {
  constructor(public router: Router) {}

      navigateOnParentGen() {
        this.router.navigate(['/modul-contracte/contract-list/contract-general']);
      }
      navigateOnParentDoc() {
        this.router.navigate(['/modul-contracte/contract-list/contract-general/contract-documents']);
      }
      navigateOnParentTask() {
        this.router.navigate(['/modul-contracte/contract-list/contract-general/contract-tasks']);
      }
      navigateOnParentAlert() {
        this.router.navigate(['/modul-contracte/contract-list/contract-general/contract-alerts']);
      }
      navigateOnParentHist() {
        this.router.navigate(['/modul-contracte/contract-list/contract-general/contract-history']);
      }
      navigateOnParentFin() {
        this.router.navigate(['/modul-contracte/contract-list/contract-general/contract-financial']);
      }
}
