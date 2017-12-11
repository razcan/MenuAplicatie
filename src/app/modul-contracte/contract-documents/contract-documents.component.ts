import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contract-documents',
  templateUrl: './contract-documents.component.html',
  styleUrls: ['./contract-documents.component.css']
})
export class ContractDocumentsComponent  {
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
