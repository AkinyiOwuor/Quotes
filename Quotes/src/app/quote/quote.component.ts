import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[];
  toggleDetail(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  constructor(){
    this.quote=[
      new Quote(1,'The way i see it,if you want the rainbow,you gotta put up with the rain.','DOLLY PATRON',new Date(2020,3,28)),
      new Quote(2,'The purpose of our lives is to be happy.','DALAI LAMA',new Date(2020,3,23)),
      new Quote(3,'Not how long,but how well you have lived in the main thing.','SENECA',new Date(2020,3,29)),
      new Quote(4,'Opportunities dont happen.You create them.','CHRIS GROSSER',new Date(2020,3.27)),
    ];
    
  } 
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  ngOnInit() {
  }


}