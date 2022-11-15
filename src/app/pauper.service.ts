import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Child, ChildData, Reddit} from './reddit';
import { Observable } from 'rxjs';

;

@Injectable({
  providedIn: 'root'
})
export class PauperService {

baseUrl:string = "https://www.reddit.com/"

  constructor(private http:HttpClient) { }

  GetRedditByName(kind: string) : Observable <ChildData>{
    return this.http.get<ChildData>(this.baseUrl + "/" + kind)
  }

GetRedditByIndex(index: number) : Observable <ChildData>{
return this.http.get<ChildData>(this.baseUrl + '../${index}/')
}
}
