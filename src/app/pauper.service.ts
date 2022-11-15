import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Reddit} from './reddit';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PauperService {

baseUrl:string = "https://www.reddit.com/r"

  constructor(private http:HttpClient) { }

  GetRedditByName(kind: string) : Observable <Reddit>{
    return this.http.get<Reddit>(this.baseUrl + "/" + kind + ".json")
  }


}

// GetRedditByIndex(_index: number) : Observable <Reddit>{
// return this.http.get<Reddit>(this.baseUrl + '')
// }
