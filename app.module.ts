import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Pipe, PipeTransform } from '@angular/core'; 
import {FilterByPipe} from './custom-pipe'

import {UserService} from './user.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    UsersListComponent,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
