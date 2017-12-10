import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, VERSION} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

  }


