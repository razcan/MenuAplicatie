import { Component, OnInit, TemplateRef } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


declare var $:JQueryStatic;

@Component({
  selector: 'app-adauga-adrese',
  templateUrl: './adauga-adrese.component.html',
  styleUrls: ['./adauga-adrese.component.css'],
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
export class AdaugaAdreseComponent {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  }

