import { Component, OnInit } from '@angular/core';
import {Toy} from '../toy';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
  myAwesomeText: string;
  filter: string;
  toys: Toy[] = [
    {
    name: 'Teddy Bear',
    color: 'Brown'
  },
  {
    name: 'Elephant',
    color: 'Black'
  },
  {
    name: 'Baby Doll',
    color: 'Pink'
  },
  {
    name: 'Duck',
    color: 'Yellow'
  }
  
];
  toy : Toy = new Toy();

  constructor() { }

  ngOnInit() {

  }

  addToy(){
    this.toys.push(this.toy);
  }

}
