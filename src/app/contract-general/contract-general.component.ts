import { Component, OnInit } from '@angular/core';
 import * as $ from 'jquery/dist/jquery.min.js';
// import * as $ from 'jquery';

@Component({
  selector: 'app-contract-general',
  templateUrl: './contract-general.component.html',
  styleUrls: ['./contract-general.component.css']
})
export class ContractGeneralComponent {

  constructor() {
    $(document).ready(function(){
      $('p').click(function(){
          $(this).hide();
      });
  });
}
}
