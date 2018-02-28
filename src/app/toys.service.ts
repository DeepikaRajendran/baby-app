import { Injectable, OnInit } from '@angular/core';
import { Toy } from './toy';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToysService {
  
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getToys();
  }

  getToys(){
    return this.http.get<Toy[]>('http://empty-night-4832.getsandbox.com/toys');    
  }

}
