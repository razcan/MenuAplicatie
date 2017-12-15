import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContractListComponent } from './modul-contracte/contract-list/contract-list.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {PickListModule, TabViewModule, CodeHighlighterModule} from 'primeng/primeng';
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
import { ModalModule } from 'ngx-bootstrap';
import { SubmenuContractService } from './services/submenu-contract.service';

export const appRoutes: Routes = [
  { path: 'contract-list', component: ContractListComponent},
  { path: 'contract-list/contract-general',      component: ContractGeneralComponent },
                { path: 'contract-list/contract-financial',      component: ContractFinancialComponent  },
                { path: 'contract-list/contract-documents', component: ContractDocumentsComponent },
                { path: 'contract-list/contract-tasks',      component: ContractTasksComponent },
                { path: 'contract-list/contract-history',      component: ContractHistoryComponent  },
                { path: 'contract-list/contract-alerts',      component: ContractTasksComponent },
              ]

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
    FormsModule,
    BrowserModule,
    HttpModule,
    BootstrapModalModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
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
    MatGridListModule,
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
    PickListModule,
    TabViewModule, CodeHighlighterModule
  ],
  providers: [SubmenuContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }

