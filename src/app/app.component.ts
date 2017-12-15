import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import * as $ from 'jquery/dist/jquery.min.js';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {VERSION} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  exports: [
    CdkTableModule,
  ]
})
export class AppComponent {
  title = 'app';

  mode = new FormControl('side');


}
