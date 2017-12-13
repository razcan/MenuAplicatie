import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubmenuContractService } from './../../services/submenu-contract.service';

@Component({
  selector: 'app-contract-alerts',
  templateUrl: './contract-alerts.component.html',
  styleUrls: ['./contract-alerts.component.css']
})
export class ContractAlertsComponent {

  constructor(private submenu: SubmenuContractService) {}
  
  butonGeneral = function ()
{
  this.submenu.navigateOnParentGen() ;

}
  
}
