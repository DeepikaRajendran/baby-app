import {
  Component,  OnInit
} from '@angular/core';
import {
  Toy
} from '../toy';

import { ToysService } from '../toys.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  toy: Toy = new Toy();
  toys: Toy[];

  constructor(private toysService: ToysService, private route:ActivatedRoute) { 

   }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      console.log(params["id"]);
    });
    this.toysService.getToys().subscribe(data => {
      this.toys = data;
    });  
    
  }

  addToy() {
    this.toys.push(this.toy);
  }

}
