import { Component } from '@angular/core';
import { PauperService } from './pauper.service';
import { Child, Reddit } from './reddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaupersReddit';
  //Simplifies so you don't have to define your fields.
  result : Reddit = {} as Reddit;
  ResultPost : Child[] = [];
  SearchName : string = "";
  // SearchIndex : number = 1;

constructor(private pauperAPI : PauperService){}


  SearchRedditByName(kind : string) {
    this.ResultPost = [];
    this.pauperAPI.GetRedditByName(kind).subscribe((result : Reddit)=>{
    //This is backend use in this case. For you to confirm you're talking to the API.
    console.log(result); 
      this.result = result;
      
      this.ResultPost = this.result.data.children;
    });
  }

  //  GetRandomNum(min : number, max : number)
  // {
  //   return Math.floor(Math.random() * max) + min;      
  // }

  // RandomReddit() : number{
  //   return this.GetRandomNum(1,9999);
  // }
}
