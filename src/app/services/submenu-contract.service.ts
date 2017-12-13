import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class SubmenuContractService {
  ServPartenerName = 'vasile';
  constructor(public router: Router) {
  }
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

  trimite() {
    // this.submenu.ServPartenerName= this.PartenerName ;
    console.log("Vasile");
   }


}
