import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContractListComponent } from './modul-contracte/contract-list/contract-list.component';
import { ModalModule } from 'ngx-modialog';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BootstrapModalModule  } from 'ngx-modialog/plugins/bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatDatepickerModule,
} from '@angular/material';
import { ContractGeneralComponent } from './modul-contracte/contract-general/contract-general.component';
import { ModulContracteComponent } from './modul-contracte/modul-contracte.component';
import { ContractFinancialComponent } from './modul-contracte/contract-financial/contract-financial.component';
import { ContractDocumentsComponent } from './modul-contracte/contract-documents/contract-documents.component';
import { ContractTasksComponent } from './modul-contracte/contract-tasks/contract-tasks.component';
import { ContractAlertsComponent } from './modul-contracte/contract-alerts/contract-alerts.component';
import { ContractHistoryComponent } from './modul-contracte/contract-history/contract-history.component';


@NgModule({
  declarations: [
    AppComponent,
    ContractListComponent,
    ContractGeneralComponent,
    ModulContracteComponent,
    ContractFinancialComponent,
    ContractDocumentsComponent,
    ContractTasksComponent,
    ContractAlertsComponent,
    ContractHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'modul-contracte/contract-list', component: ContractListComponent, pathMatch: 'full'}
    ]),
    RouterModule.forChild([
      {path: 'modul-contracte/contract-list',
      children: [ {path: 'contract-general', component: ContractGeneralComponent, pathMatch: 'full'},
          { path: 'contract-general',
            component: ContractGeneralComponent,
          },
        ]
      }
    ]),
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatDatepickerModule,
  ],
  exports: [
    MatStepperModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routingComponents =  [ContractListComponent, ContractGeneralComponent];

