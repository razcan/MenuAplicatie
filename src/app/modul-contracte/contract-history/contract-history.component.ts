import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contract-history',
  templateUrl: './contract-history.component.html',
  styleUrls: ['./contract-history.component.css']
})


export class ContractHistoryComponent {


   myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);


    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    document.getElementById("myList").appendChild(x);
  }


  htmlYouWantToAdd;
  html2;
  private addHTML() {
      this.htmlYouWantToAdd = `<b>Some HTML you want to display</b>  
                               <b>Some HTML you want to display</b>  
                               <input type="submit" value="Submit">`;
  }
  private htmll() {
    this.html2 = `<p>Teste dasldajlsdkaldjlajlkdsjaldjalskjlkjlkjalksjldkjaldaskdj</p>`
  }
  
}

class QuestionResponse {
  constructor(public questionText, public questionNumber) {
  }
}


function questioner(question: QuestionResponse) {
  return `<div data-val-id="${question.questionNumber}"> ${question.questionText} </div>`;
}

let button = document.createElement('button');
button.textContent = "Say Hjjkhsdkhfshfksjhdfkhskdjhfksjhdfkshdkjfdskhkjdshkfhksdjkfhksdjhfksjello";
button.onclick = function() {
    console.log("merge");
}

document.body.appendChild(button);
//this will be replaced by .innerHTML of some element:
// alert(questioner(testQuestion));