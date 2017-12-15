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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {ViewEncapsulation} from '@angular/core';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-general',
  templateUrl: './contract-general.component.html',
  styleUrls: ['./contract-general.component.css'],
  encapsulation: ViewEncapsulation.None,
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
 
  PartenerName = [
    {value: 'Partener 1', viewValue: 'Partener 1'},
    {value: 'Partener 2', viewValue: 'Partener 2'},
    {value: 'Partener 3', viewValue: 'Partener 3'}
  ];
  
  ContractType = [
    {value: 'Achizitie', viewValue: 'Achizitie'},
    {value: 'Furnizare', viewValue: 'Furnizare'}
];

StatusContract = [
  {value: 'Draft', viewValue: 'Draft'},
  {value: 'Anulat', viewValue: 'Anulat'},
  {value: 'Valid', viewValue: 'Valid'}
];

StateContract = [
  {value: 'Initiat', viewValue: 'Initiat'},
  {value: 'Analiza', viewValue: 'Analiza'}
];

email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

date = new FormControl(new Date());
serializedDate = new FormControl((new Date()).toISOString());

  constructor(private modalService: BsModalService, private submenu: SubmenuContractService) {
 
    

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);  
  }



}
