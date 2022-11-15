import { Component } from '@angular/core';
import { PauperService } from './pauper.service';
import { ChildData, Reddit } from './reddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaupersReddit';

  resultReddit : ChildData[] = [];
  SearchName : string = "";
  SearchIndex : number = 1;

constructor(private pauperAPI : PauperService){}


  SearchRedditByName(kind : string) {
    this.resultReddit = [];
    this.pauperAPI.GetRedditByName(kind).subscribe((result : ChildData)=>{this.resultReddit.push(result)});
  }

  SearchRedditByIndex(index : number) : void{
    this.resultReddit = [];
    this.pauperAPI.GetRedditByIndex(index).subscribe((result : ChildData) => {this.resultReddit.push(result)});
  }

   GetRandomNum(min : number, max : number)
  {
    return Math.floor(Math.random() * max) + min;      
  }

  RandomReddit() : number{
    return this.GetRandomNum(1,9999);
  }
}
