import { Component, OnInit,Input, OnChanges,SimpleChanges } from '@angular/core';
import {UserService} from '../user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit,OnChanges {
  public selectedUserName:any;
  public searchText:string;
  clickEventsubscription:Subscription;
  constructor(public user:UserService) { 
    this.clickEventsubscription= this.user.getSelectedName().subscribe(()=>{
      console.log("called");
      this.getNameValue();
      });
    
  }
  
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges) {
    
  }
  
  getNameValue(){
    this.selectedUserName=this.user.getSelectedName();
    console.log(this.selectedUserName);
  }
  
}
