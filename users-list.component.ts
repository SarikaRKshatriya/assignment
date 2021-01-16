import { Component, OnInit,Input, OnChanges,SimpleChanges } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit,OnChanges {
  @Input() searchText: any;
  public selectedText:string;
  public tableData:any;
  constructor(public user:UserService) { }

  ngOnInit(): void {
    this.user.getUsers().subscribe(resp =>
      {
        this.tableData = resp;
        console.log(this.tableData);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    this.selectedText = this.searchText;
  }

  clickRow(name){
    console.log(name);
    this.user.setSelectedName(name);
  }
  
}
