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
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-general',
  templateUrl: './contract-general.component.html',
  styleUrls: ['./contract-general.component.css']
})
export class ContractGeneralComponent {
}
