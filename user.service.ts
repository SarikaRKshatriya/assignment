import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public selectedName:string;
  private subject = new Subject<any>();
  constructor(private http:HttpClient) { }
  getUsers() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
   }
   setSelectedName(name){
     this.selectedName = name;
   }
  //  getSelectedName(){
  //   return this.selectedName;
  // }
 

  getSelectedName(): Observable<any>{ 
  return this.subject.asObservable();
}
}
