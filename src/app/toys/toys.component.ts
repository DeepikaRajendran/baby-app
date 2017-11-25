import { Component, OnInit } from '@angular/core';
import {Toy} from '../toy';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  toy: Toy = {
    name: 'Teddy Bear',
    color: 'Brown'
  };

  constructor() { }

  ngOnInit() {
  }

}
