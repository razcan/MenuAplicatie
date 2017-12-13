import { Component, OnInit, TemplateRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, VERSION} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule, Modal, bootstrap4Mode } from 'ngx-modialog/plugins/bootstrap';
import { ViewContainerRef } from '@angular/core';
import { Overlay } from 'ngx-modialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';
import {FormControl } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SubmenuContractService } from './../../services/submenu-contract.service';

@Component({
  selector: 'app-contract-general',
  templateUrl: './contract-general.component.html',
  styleUrls: ['./contract-general.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ContractGeneralComponent {
  modalRef: BsModalRef;
  firstname;
  PartenerName;
  constructor(private modalService: BsModalService, private submenu: SubmenuContractService) {
 
    

  }

trimite(){
  
  this.submenu.ServPartenerName =this.PartenerName ;
  console.log("Componenenta " + this.PartenerName);
  console.log("Serviciu " + this.submenu.ServPartenerName);
}
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);  
  }



}
