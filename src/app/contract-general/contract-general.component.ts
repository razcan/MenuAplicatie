import { Component, OnInit } from '@angular/core';
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



@Component({
  selector: 'app-contract-general',
  // template: `<button (click)="onClick()">Alert</button>`,
  templateUrl: './contract-general.component.html',
  styleUrls: ['./contract-general.component.css']
})
export class ContractGeneralComponent {

  date;
  kk;
  data() {

    const date = new Date();
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString();
    const month1 = month.length > 1 ? month : '0' + month;
    const day = date.getDate().toString();
    const day1 = day.length > 1 ? day : '0' + day;
    const kk = month1 + '/' + day1 + '/' + year;
    console.log(kk);
  }

constructor(public modal: Modal) { }



  onClick() {
    const dialogRef = this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Introduceti Adresa')
        .body(`
        <div (click)="onContainerClicked($event)" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
        [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <ng-content select=".app-modal-header"></ng-content>
         </div>
         <div class="modal-body">
           <ng-content select=".app-modal-body"></ng-content>
         </div>
         <div class="modal-footer">
           <ng-content select=".app-modal-footer"></ng-content>
         </div>
       </div>
     </div>
   </div>  `)
        .open();

    // dialogRef.result
    //     .then( result => alert(`The result is: ${result}`) );
  }
  public visible = false;
  private visibleAnimate = false;


  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}

