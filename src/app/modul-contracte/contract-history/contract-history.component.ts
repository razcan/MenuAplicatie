import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {PickListModule, TabViewModule, CodeHighlighterModule} from 'primeng/primeng';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-contract-history',
  templateUrl: './contract-history.component.html',
  styleUrls: ['./contract-history.component.css']
})
export class ContractHistoryComponent {


Selected;
Property;
TypeValue;
Value;


tipValoare(TypeValue) {
  var rezultat;
  var Value=TypeValue ;
  switch(Value) { 
     case "Text": { 
        console.log('<input type="text">'); 
        rezultat='<input type="text">';
        return rezultat;
     } 
     case "Valoare": { 
        console.log("Valoare"); 
        break; 
     } 
     case "Data": { 
      console.log("Data"); 
      break; 
   } 
  }

}

}
