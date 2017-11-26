import { Component, OnInit } from '@angular/core';
import {Toy} from '../toy';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
